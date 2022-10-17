module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'standard-with-typescript',
		'plugin:prettier/recommended',
		'prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	rules: {
		'no-param-reassign': 'error',
		'comma-dangle': ['error', 'only-multiline'],
		'semi-style': ['error', 'last'],
	},
};
