export default {
	mode: 'universal',

	/*
   ** Headers of the page
   */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [{rel: 'icon', type: 'image/png', href: '/favicon.png'}],
	},

	/*
   ** Customize the progress-bar color
   */
	loading: {color: '#fff'},

	/*
   ** Global CSS
   */
	css: [],

	/*
   ** Plugins to load before mounting the App
   */
	plugins: [],

	/*
   ** Nuxt.js modules
   */
	modules: [
		'@nuxtjs/pwa',
	],

	/*
   ** Build configuration
   */
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
				minifyCSS: false,
			},
		},
	},
};
