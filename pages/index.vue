<template>
	<div class="container">
		<logo/>
	</div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import iconImage from '~/static/icon.png';

export default {
	components: {
		Logo,
	},
	head() {
		const description = 'Tokyo-Olym.picsは、四角形を動かしたりくっつけたりすることができるウェブサイトです。四角形を動かしたりくっつけたりして遊びましょう。';
		const title = 'Tokyo-Olym.pics';

		return {
			title,
			meta: [
				{hid: 'description', name: 'description', content: description},
				{hid: 'og:site_name', property: 'og:site_name', content: title},
				{hid: 'og:type', property: 'og:type', content: 'website'},
				{hid: 'og:url', property: 'og:url', content: 'https://tokyo-olym.pics'},
				{hid: 'og:title', property: 'og:title', content: title},
				{hid: 'og:description', property: 'og:description', content: description},
				{hid: 'og:image', property: 'og:image', content: iconImage},
				{property: 'article:publisher', content: 'FacebookURL'},
				{property: 'fb:app_id', content: 'FacebookAppID'},
				{name: 'twitter:card', content: 'summary'},
				{name: 'twitter:site', content: '@hakatashi'},
				{name: 'twitter:title', content: title},
				{name: 'twitter:description', content: description},
				{name: 'twitter:image', content: iconImage},
			],
			link: [
				{rel: 'canonical', href: 'https://tokyo-olym.pics'},
			],
		};
	},
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
