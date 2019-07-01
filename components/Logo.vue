<template>
	<div ref="wrap" class="wrap">
		<svg class="Logo" viewBox="0 0 1000 1000">
			<g class="pins">
				<circle
					v-for="i in Array(24).keys()"
					:key="i"
					r="5"
					fill="#061d5b"
					:cx="500 + Math.sin((i + 0.5) * 15 / 180 * Math.PI) * 480"
					:cy="500 + Math.cos((i + 0.5) * 15 / 180 * Math.PI) * 480"
				/>
			</g>
			<g class="bodies">
				<polygon
					v-for="body in bodies"
					:key="body.id"
					class="body"
					:points="body.vertices.map(({x, y}) => `${x},${y}`).join(' ')"
					fill="#061d5b"
				/>
			</g>
			<text
				class="title"
				x="500"
				y="500"
				text-anchor="middle"
				font-size="30"
				fill="#061d5b"
			>
				tokyo-olym.pics
			</text>
		</svg>
	</div>
</template>

<script>
import {Engine, Composite, World, Mouse, MouseConstraint, Bodies, Vector} from 'matter-js';

const baseSize = 480 * Math.sin(Math.PI / 24) * 2 / (Math.sqrt(3) + 2);

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
		};
	},
	async mounted() {
		await new Promise((resolve) => {
			setTimeout(resolve, 2000);
		});

		this.engine = Engine.create();

		const pieces = Array(9).fill().map((...[, i]) => (
			Bodies.rectangle(Math.random() * 800 + 100, Math.random() * 500 + 200, pieceTypes[i % 3].width, pieceTypes[i % 3].height)
		));
		const ground = Bodies.rectangle(500, 1250, 2000, 500, {isStatic: true});
		const ceil = Bodies.rectangle(500, -250, 2000, 500, {isStatic: true});
		const rightWall = Bodies.rectangle(1250, 500, 500, 1000, {isStatic: true});
		const leftWall = Bodies.rectangle(-250, 500, 500, 1000, {isStatic: true});
		World.add(this.engine.world, [...pieces, ground, ceil, leftWall, rightWall]);

		this.mouse = Mouse.create(this.$refs.wrap);
		const mouseConstraint = MouseConstraint.create(this.engine, {mouse: this.mouse});
		World.add(this.engine.world, mouseConstraint);

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
		onTick() {
			const bodies = Composite.allBodies(this.engine.world);
			this.bodies = bodies;
		},
		onWindowResize() {
			const scale = 1000 / Math.min(window.innerWidth, window.innerHeight);
			Mouse.setScale(this.mouse, Vector.create(scale, scale));
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
