module.exports = {
	context: `${__dirname}/../`,
	target: 'web',
	resolve: {
		extensions: ['.js', '.json', '.sass'],
		alias: {
			Components: `${__dirname}/../client/components`,
			Modules: `${__dirname}/../client/modules`,
			GlobalStyleVars: `${__dirname}/../client/global-styles/base/_vars.sass`
		}
	},
	output: {
		filename: 'bundle.js'
	}
}
