module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,webp,jpg,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};