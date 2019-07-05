<template>
	<div class="wrap">
		<div ref="wrap" class="svg-wrap">
			<svg class="Logo" viewBox="0 0 1000 1000">
				<g class="pins">
					<circle
						v-for="(pin, i) in pins"
						:key="i"
						class="pin"
						:r="(alwaysShowPins || pinConstraints[i].length === 0) ? 5 : 0"
						fill="#001f62"
						:cx="pin.x"
						:cy="pin.y"
					/>
				</g>
				<g class="bodies">
					<g
						v-for="body in bodies"
						:key="body.id"
						class="body"
						@click="onClickBody(body)"
						@touchend="onClickBody(body)"
					>
						<polygon
							:points="body.vertices.map(({x, y}) => `${x},${y}`).join(' ')"
							fill="#001f62"
						/>
						<path
							v-if="body.isStatic"
							d="M0-8A8,8,0,0,0-8,0,8,8,0,0,0,0,8,8,8,0,0,0,8,0,8,8,0,0,0,0-8ZM4.53,3,3,4.53l-3-3-3,3L-4.53,3l3-3-3-3L-3-4.53l3,3,3-3L4.53-3l-3,3Z"
							fill="white"
							class="remove"
							:transform="`translate(${body.position.x}, ${body.position.y})`"
						/>
					</g>
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
			</svg>
		</div>
		<div class="overlay">
			<h1 class="main-title">tokyo-olym.pics</h1>
			<p class="links">
				<button class="link" @click="isModal = true">About</button>
				<a
					class="link"
					href="https://github.com/hakatashi/tokyo-olym.pics"
					target="_blank"
					rel="nofollow"
				>GitHub</a>
			</p>
		</div>
		<div class="modal-wrap" @click="isModal = false">
			<transition name="modal">
				<div v-if="isModal" class="modal-body">
					<h1 class="title">tokyo-olym.pics</h1>
					<p class="subtitle">
						by <a
							href="https://github.com/hakatashi"
							target="_blank"
							rel="nofollow"
						>@hakatashi</a>
					</p>
					<hr>
					<p>
						<strong>tokyo-olym.pics</strong>は四角形を動かしたり<br>
						くっつけたりすることができるウェブサイトです。<br>
						四角形を動かしたりくっつけたりして遊びましょう。
					</p>
					<p>
						※本サイトは実在の人物、団体、および<br>
						国際的な総合スポーツ大会とは一切関係ありません。
					</p>
					<hr>
					<p>
						<strong>tokyo-olym.pics</strong> is the website in which<br>
						you can drag and glue the rectangles.<br>
						So let's drag and glue the rectangles.
					</p>
					<p>
						* This website is fictitious.<br>
						Any similarity to actual persons, entity,<br>
						or an international sports event is unintentional.
					</p>
				</div>
			</transition>
		</div>
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
import minBy from 'lodash/minBy.js';

import getFartherestPoint from '~/components/utils/getFartherestPoint.js';

const baseSize = 450 * Math.sin(Math.PI / 24) * 2 / (Math.sqrt(3) + 2 + Math.sqrt(2) + Math.sqrt(6)) * 2;

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
			isModal: false,
			alwaysShowPins: true,
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

		setTimeout(() => {
			this.alwaysShowPins = false;
		}, 1500);

		this.engine = Engine.create();

		const pieces = Array(6).fill().map((...[, i]) => (
			Bodies.rectangle(
				i === 0 ? this.pins[14].x : Math.random() * 800 + 100,
				i === 0 ? this.pins[14].y : Math.random() * 500 + 200,
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
		console.log(this.$refs.wrap);
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
		this.pieces = new Set(pieces);

		this.addConstraint(
			{
				type: 'pin',
				id: 14,
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
				const constraint = Constraint.create({
					bodyB: bodyB.body,
					pointA: this.pins[bodyA.id],
					pointB: {
						x: vertix.x - bodyB.body.position.x,
						y: vertix.y - bodyB.body.position.y,
					},
					length: 0,
					stiffness: 0.8,
				});
				World.add(this.engine.world, constraint);

				if (!this.constrainedVertices.has(bodyB.body.id)) {
					this.constrainedVertices.set(bodyB.body.id, new Set());
				}
				this.constrainedVertices.get(bodyB.body.id).add(bodyB.vertixIndex);

				this.constraints.push({bodyA, bodyB, constraint});
			} else if (bodyA.type === 'body') {
				assert(bodyB.type === 'body');

				const vertixA = bodyA.body.vertices[bodyA.vertixIndex];
				const vertixB = bodyB.body.vertices[bodyB.vertixIndex];
				const constraint = Constraint.create({
					bodyA: bodyA.body,
					bodyB: bodyB.body,
					pointA: {
						x: vertixA.x - bodyA.body.position.x,
						y: vertixA.y - bodyA.body.position.y,
					},
					pointB: {
						x: vertixB.x - bodyB.body.position.x,
						y: vertixB.y - bodyB.body.position.y,
					},
					length: 0,
					stiffness: 0.8,
				});
				World.add(this.engine.world, constraint);

				for (const {body, vertixIndex} of [bodyA, bodyB]) {
					if (!this.constrainedVertices.has(body.id)) {
						this.constrainedVertices.set(body.id, new Set());
					}
					this.constrainedVertices.get(body.id).add(vertixIndex);
				}

				this.constraints.push({bodyA, bodyB, constraint});
			}

			if (this.constrainedVertices.get(bodyB.body.id).size >= 2) {
				const newPiece = bodyB.body.label;
				const newPoint = getFartherestPoint(
					[
						...Array.from(this.pieces).map(({position}) => [position.x, position.y]),
						[0, 0],
						[0, 1000],
						[1000, 1000],
						[1000, 0],
					],
					{
						width: 1000,
						height: 1000,
					},
				);
				const piece = Bodies.rectangle(
					newPoint.x,
					newPoint.y,
					pieceTypes[newPiece].width,
					pieceTypes[newPiece].height,
					{
						label: newPiece,
					},
				);
				World.add(this.engine.world, piece);
				this.pieces.add(piece);

				setTimeout(() => {
					Body.setStatic(bodyB.body, true);
				}, 500);
			}
		},
		getConstraintCandidates(body) {
			let minDistance = Infinity;
			let minConstraint = null;
			if (!this.constrainedVertices.has(body.id)) {
				this.constrainedVertices.set(body.id, new Set());
			}

			const constraints = this.constrainedVertices.get(body.id);

			for (const [vertixIndex, vertix] of body.vertices.entries()) {
				if (constraints.has(vertixIndex)) {
					continue;
				}

				for (const [pinIndex, pin] of this.pins.entries()) {
					if (this.pinConstraints[pinIndex].length >= 1) {
						continue;
					}

					const distance = Math.sqrt((vertix.x - pin.x) ** 2 + (vertix.y - pin.y) ** 2);
					if (minDistance > distance) {
						minDistance = distance;
						minConstraint = {
							bodyA: {
								type: 'pin',
								id: pinIndex,
							},
							bodyB: {
								type: 'body',
								body,
								vertixIndex,
							},
							position: pin,
						};
					}
				}

				for (const piece of this.pieces) {
					if (piece.id === body.id || !piece.isStatic) {
						continue;
					}

					const constrainedVertices = this.constrainedVertices.get(piece.id);
					for (const [pieceVertixIndex, pieceVertix] of piece.vertices.entries()) {
						if (constrainedVertices.has(pieceVertixIndex)) {
							continue;
						}
						const distance = Math.sqrt((vertix.x - pieceVertix.x) ** 2 + (vertix.y - pieceVertix.y) ** 2);
						if (minDistance > distance) {
							minDistance = distance;
							minConstraint = {
								bodyA: {
									type: 'body',
									body: piece,
									vertixIndex: pieceVertixIndex,
								},
								bodyB: {
									type: 'body',
									body,
									vertixIndex,
								},
								position: pieceVertix,
							};
						}
					}
				}
			}

			if (
				(constraints.size === 0 && minDistance < 25) ||
				(constraints.size === 1 && minDistance < 10)
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
			if (!this.pieces.has(event.body)) {
				return;
			}
			const [constraint] = this.getConstraintCandidates(event.body);
			if (constraint !== undefined) {
				this.addConstraint(constraint.bodyA, constraint.bodyB);
			}
			this.constraintCandidates = [];
		},
		removeBody(body, byClick = false) {
			if (!this.pieces.has(body)) {
				return;
			}

			if (byClick && !body.isStatic) {
				return;
			}

			World.remove(this.engine.world, body);
			const constraintRemovals = [];
			for (const [index, constraint] of this.constraints.entries()) {
				if (constraint.bodyA.type === 'body' && constraint.bodyA.body.id === body.id) {
					World.remove(this.engine.world, constraint.constraint);
					this.constrainedVertices.get(constraint.bodyA.body.id).delete(constraint.bodyA.vertixIndex);
					if (constraint.bodyB.type === 'body') {
						this.constrainedVertices.get(constraint.bodyB.body.id).delete(constraint.bodyB.vertixIndex);
					}
					constraintRemovals.push(index);
					continue;
				}
				if (constraint.bodyB.type === 'body' && constraint.bodyB.body.id === body.id) {
					World.remove(this.engine.world, constraint.constraint);
					if (constraint.bodyA.type === 'body') {
						this.constrainedVertices.get(constraint.bodyA.body.id).delete(constraint.bodyA.vertixIndex);
					}
					this.constrainedVertices.get(constraint.bodyB.body.id).delete(constraint.bodyB.vertixIndex);
					constraintRemovals.push(index);
					continue;
				}
			}

			constraintRemovals.sort((a, b) => b - a);
			for (const removal of constraintRemovals) {
				this.constraints.splice(removal, 1);
			}

			this.pieces.delete(body);
			const pieceRemovals = [];

			for (const piece of this.pieces) {
				const vertices = this.constrainedVertices.get(piece.id);
				if (piece.isStatic && vertices.size <= 1) {
					Body.setStatic(piece, false);
					const pieceRemoval = minBy(Array.from(this.pieces), (candidatePiece) => {
						if (candidatePiece.label !== piece.label) {
							return Infinity;
						}
						if (pieceRemovals.some((removal) => removal.id === candidatePiece.id)) {
							return Infinity;
						}
						const candidateVertices = this.constrainedVertices.get(candidatePiece.id);
						if (candidateVertices) {
							return candidateVertices.size;
						}
						return 0;
					});
					if (pieceRemoval) {
						pieceRemovals.push(pieceRemoval);
					}
				}
			}

			for (const removal of pieceRemovals) {
				this.removeBody(removal);
			}
		},
		onClickBody(body) {
			this.removeBody(body, true);
		},
	},
};
</script>

<style>
.wrap, .svg-wrap, .Logo {
	width: 100vmin;
	height: 100vmin;
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	user-select: none;
	position: relative;
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

.body {
	animation: show 1.5s;
	cursor: pointer;
}

.body .remove {
	opacity: 0;
	transition: opacity 0.1s;
}

.body:hover .remove {
	opacity: 0.8;
}

@keyframes show {
	from { opacity: 0; }
	to { opacity: 1; }
}

.overlay {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	pointer-events: none;
}

.main-title {
	letter-spacing: 0.15em;
	animation: bring-up 1.5s 2s cubic-bezier(.16, .5, .5, 1) both;
	color: #001f62;
	font-weight: bold;
	font-size: 3.5vmin;
}

.links {
	animation: bring-up 1.5s 2.5s cubic-bezier(.16, .5, .5, 1) both;
}

@keyframes bring-up {
	from {
		transform: translateY(100px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

.link {
	margin-top: 0.5rem;
	padding: 0.3rem 1rem;
	outline: none;
	border: none;
	border-radius: 5px;
	background-color: transparent;

	color: #001f62;
	font-weight: bold;
	font-size: 1rem;
	opacity: 0.7;

	pointer-events: initial;
	cursor: pointer;
	text-decoration: none;
}

.modal-wrap {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	pointer-events: none;
	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
}

.modal-body {
	width: 50rem;
	height: 50rem;
	padding: 5vmin;
	max-width: 100%;
	max-height: 100%;

	border: 2px solid #001f62;
	background: white;

	color: #001f62;
	font-size: 3vmin;

	pointer-events: initial;
	cursor: pointer;
	transform: translate(0);

	display: flex;
	flex-direction: column;

	justify-content: space-around;
	align-items: center;
}

.modal-enter-active, .modal-leave-active {
	transition: transform 0.5s;
}

.modal-enter {
	transform: translateY(100vh);
}

.modal-leave-to {
	transform: translateY(-100vh);
}

.modal-body .title {
	font-size: 6vmin;
	letter-spacing: 0.1em;
	font-weight: bold;
}

.modal-body .subtitle {
	font-size: 3vmin;
	text-align: center;
}

.modal-body .subtitle a {
	font-weight: bold;
	color: inherit;
	text-decoration: none;
}

.modal-body p {
	width: 100%;
	text-align: left;
}
</style>
