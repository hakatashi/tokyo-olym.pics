<template>
	<svg class="Logo" viewBox="0 0 1000 1000">
		<g class="pins">
			<circle
				v-for="i in Array(24).keys()"
				:key="i"
				r="5"
				fill="#061d5b"
				:cx="500 + Math.sin(i * 15 / 180 * Math.PI) * 480"
				:cy="500 + Math.cos(i * 15 / 180 * Math.PI) * 480"
			/>
		</g>
	</svg>
</template>

<style>
.Logo {
	width: 100vmin;
	height: 100vmin;
}

.pins {
	animation: rotate 4s cubic-bezier(.15,.48,.34,1);
	transform-origin: center;
}

@keyframes rotate {
	from { transform: rotate(-480deg); opacity: 0; }
	to { transform: rotate(0deg); opacity: 1; }
}
</style>
