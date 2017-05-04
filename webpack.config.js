module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: "./app/temp/scripts",
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			},
			 {
      test: /particles\.js/,
      loader: 'exports?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
    }
		]
	}
}
