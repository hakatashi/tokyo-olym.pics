<template>
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
</template>

<style>
.Logo {
	width: 100vmin;
	height: 100vmin;
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
</style>
