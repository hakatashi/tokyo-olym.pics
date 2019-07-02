<template>
	<div ref="wrap" class="wrap">
		<svg class="Logo" viewBox="0 0 1000 1000">
			<g class="pins">
				<circle
					v-for="(pin, i) in pins"
					:key="i"
					class="pin"
					:r="pinConstraints[i].length === 0 ? 5 : 0"
					fill="#001f62"
					:cx="pin.x"
					:cy="pin.y"
				/>
			</g>
			<g class="bodies">
				<polygon
					v-for="body in bodies"
					:key="body.id"
					class="body"
					:points="body.vertices.map(({x, y}) => `${x},${y}`).join(' ')"
					fill="#001f62"
				/>
			</g>
			<transition-group name="pin-constraint" tag="g">
				<circle
					v-for="constraint in constraintCandidates"
					:key="[constraint.position.x, constraint.position.y].join(',')"
					class="pin-constraint"
					fill="white"
					stroke="#001f62"
					:cx="constraint.position.x"
					:cy="constraint.position.y"
				/>
			</transition-group>
			<text
				class="title"
				x="500"
				y="500"
				text-anchor="middle"
				font-size="30"
				fill="#001f62"
			>
				tokyo-olym.pics
			</text>
		</svg>
	</div>
</template>

<script>
import {
	Bodies,
	Body,
	Composite,
	Constraint,
	Engine,
	Events,
	Mouse,
	MouseConstraint,
	Vector,
	World,
} from 'matter-js';
import assert from 'assert';

const baseSize = 450 * Math.sin(Math.PI / 24) * 2 / (Math.sqrt(3) + 2);

const pieceTypes = [
	{
		width: baseSize * (Math.sqrt(3) + 2),
		height: baseSize,
	},
	{
		width: baseSize * (Math.sqrt(2) + Math.sqrt(6)) / 2,
		height: baseSize * (3 * Math.sqrt(2) + Math.sqrt(6)) / 2,
	},
	{
		width: baseSize * (Math.sqrt(3) + 1),
		height: baseSize * (Math.sqrt(3) + 1),
	},
];

export default {
	data() {
		return {
			bodies: [],
			pins: Array(24).fill().map((...[, i]) => ({
				x: 500 + Math.sin((i + 0.5) * 15 / 180 * Math.PI) * 450,
				y: 500 + Math.cos((i + 0.5) * 15 / 180 * Math.PI) * 450,
			})),
			constraintCandidates: [],
			constraints: [],
		};
	},
	computed: {
		pinConstraints() {
			const pinConstraints = Array(24).fill().map(() => []);
			for (const constraint of this.constraints) {
				if (constraint.bodyA.type === 'pin') {
					pinConstraints[constraint.bodyA.id].push(constraint);
				}
			}
			return pinConstraints;
		},
	},
	async mounted() {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000);
		});

		this.engine = Engine.create();

		const pieces = Array(6).fill().map((...[, i]) => (
			Bodies.rectangle(
				Math.random() * 800 + 100,
				Math.random() * 500 + 200,
				pieceTypes[i % 3].width,
				pieceTypes[i % 3].height,
				{
					label: i % 3,
				},
			)
		));
		const ground = Bodies.rectangle(500, 1250, 2000, 500, {isStatic: true});
		const ceil = Bodies.rectangle(500, -250, 2000, 500, {isStatic: true});
		const rightWall = Bodies.rectangle(1250, 500, 500, 1000, {isStatic: true});
		const leftWall = Bodies.rectangle(-250, 500, 500, 1000, {isStatic: true});
		World.add(this.engine.world, [...pieces, ground, ceil, leftWall, rightWall]);

		this.mouse = Mouse.create(this.$refs.wrap);
		this.mouseConstraint = MouseConstraint.create(this.engine, {
			mouse: this.mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false,
				},
			},
		});
		Events.on(this.mouseConstraint, 'enddrag', this.onEndDrag);
		World.add(this.engine.world, this.mouseConstraint);

		this.constrainedVertices = new Map();

		this.addConstraint(
			{
				type: 'pin',
				id: 12,
			},
			{
				type: 'body',
				body: pieces[0],
				vertixIndex: 0,
			},
		);

		Engine.run(this.engine);

		this.tickInterval = setInterval(this.onTick, 100);
		window.addEventListener('resize', this.onWindowResize);
		this.onWindowResize();
	},
	destroyed() {
		clearInterval(this.tickInterval);
		window.removeEventListener('resize', this.onWindowResize);
	},
	methods: {
		addConstraint(bodyA, bodyB) {
			if (bodyA.type === 'pin') {
				assert(bodyB.type === 'body');

				const vertix = bodyB.body.vertices[bodyB.vertixIndex];
				World.add(this.engine.world, Constraint.create({
					bodyB: bodyB.body,
					pointA: this.pins[bodyA.id],
					pointB: {
						x: vertix.x - bodyB.body.position.x,
						y: vertix.y - bodyB.body.position.y,
					},
					length: 0,
					stiffness: 0.8,
				}));

				if (!this.constrainedVertices.has(bodyB.body.id)) {
					this.constrainedVertices.set(bodyB.body.id, []);
				}
				this.constrainedVertices.get(bodyB.body.id).push(bodyB.vertixIndex);
				this.constraints.push({bodyA, bodyB});

				if (this.constrainedVertices.get(bodyB.body.id).length >= 2) {
					const newPiece = bodyB.body.label;
					World.add(
						this.engine.world,
						Bodies.rectangle(
							Math.random() * 800 + 100,
							Math.random() * 500 + 200,
							pieceTypes[newPiece].width,
							pieceTypes[newPiece].height,
							{
								label: newPiece,
							},
						),
					);

					setTimeout(() => {
						Body.setStatic(bodyB.body, true);
					}, 500);
				}
			}
		},
		getConstraintCandidates(body) {
			let minDistance = Infinity;
			let minConstraint = null;
			if (!this.constrainedVertices.has(body.id)) {
				this.constrainedVertices.set(body.id, []);
			}

			const constraints = this.constrainedVertices.get(body.id);

			for (const [vertixIndex, vertix] of body.vertices.entries()) {
				if (constraints.includes(vertixIndex)) {
					continue;
				}

				for (const [pinIndex, pin] of this.pins.entries()) {
					if (this.pinConstraints[pinIndex].length >= 2) {
						continue;
					}

					const distance = Math.sqrt((vertix.x - pin.x) ** 2 + (vertix.y - pin.y) ** 2);
					if (minDistance > distance) {
						minDistance = distance;
						minConstraint = {
							pinIndex,
							body,
							vertixIndex,
							position: pin,
						};
					}
				}
			}

			if (
				(constraints.length === 0 && minDistance < 25) ||
				(constraints.length === 1 && minDistance < 10)
			) {
				return [minConstraint];
			}
			return [];
		},
		onTick() {
			const bodies = Composite.allBodies(this.engine.world);
			this.bodies = bodies;

			if (this.mouseConstraint.body !== null) {
				this.constraintCandidates = this.getConstraintCandidates(this.mouseConstraint.body);
			}
		},
		onWindowResize() {
			const scale = 1000 / Math.min(window.innerWidth, window.innerHeight);
			Mouse.setScale(this.mouse, Vector.create(scale, scale));
		},
		onEndDrag(event) {
			const [constraint] = this.getConstraintCandidates(event.body);
			if (constraint !== undefined) {
				this.addConstraint(
					{
						type: 'pin',
						id: constraint.pinIndex,
					},
					{
						type: 'body',
						body: constraint.body,
						vertixIndex: constraint.vertixIndex,
					},
				);
			}
			this.constraintCandidates = [];
		},
	},
};
</script>

<style>
.wrap, .Logo {
	width: 100vmin;
	height: 100vmin;
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	user-select: none;
}

.pins {
	animation: rotate 4s cubic-bezier(.15,.48,.34,1);
	transform-origin: center;
}

@keyframes rotate {
	from { transform: rotate(-480deg); opacity: 0; }
	to { transform: rotate(0deg); opacity: 1; }
}

.pin {
	transition: r 0.1s;
}

.pin-constraint {
	r: 8;
	stroke-width: 5;
}

.pin-constraint-enter-active, .pin-constraint-leave-active {
	transition: all 0.1s;
}

.pin-constraint-enter, .pin-constraint-leave-to {
	r: 0;
}

.title {
	letter-spacing: 0.15em;
	animation: bring-up 3s 2s ease-in-out both;
}

@keyframes bring-up {
	from {
		transform: translateY(100px);
		opacity: 0;
		animation-timing-function: ease-out;
	}
	30% {
		transform: translateY(10px);
		opacity: 1;
		animation-timing-function: linear;
	}
	70% {
		transform: translateY(-10px);
		opacity: 1;
		animation-timing-function: ease-in;
	}
	to {
		transform: translateY(-100px);
		opacity: 0;
	}
}

.body {
	animation: show 1.5s;
}

@keyframes show {
	from { opacity: 0; }
	to { opacity: 1; }
}
</style>
