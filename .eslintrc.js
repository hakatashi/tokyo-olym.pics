module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@hakatashi',
	],
	rules: {
		'node/no-unsupported-features': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'sort-imports': 'off',
	},
};
