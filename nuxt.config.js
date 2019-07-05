export default {
	mode: 'universal',

	head: {
		htmlAttrs: {
			prefix: 'og: http://ogp.me/ns#',
		},
		title: 'Tokyo-Olym.pics',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
		],
		link: [{rel: 'icon', type: 'image/png', href: '/icon.png'}],
	},

	loading: {color: '#fff'},

	css: [],

	plugins: [],

	modules: [
		'@nuxtjs/pwa',
	],

	build: {
		postcss: {
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
		optimizeCSS: false,
		html: {
			minify: {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				decodeEntities: true,
				minifyCSS: false,
				minifyJS: true,
				processConditionalComments: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				trimCustomFragments: true,
				useShortDoctype: true,
			},
		},
	},
};
