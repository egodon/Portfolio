module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		path: "./app/temp/scripts",
		filename: "app.js"
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
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
            	test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000'
            },
            { 	test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
            },
			{
      			test: /particles\.js/,
      			loader: 'exports?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
			}
		]
	}
}
