ar config = require('./webpack.config.default.js'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	extractCSS = new ExtractTextPlugin('css/[name].[chunkhash].css', { allChunks: true }),
	project_path = path.join(__dirname, '../app'),
	webpack = require('webpack');

config.plugins = config.plugins.concat([
	extractCSS,
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
			LOGIN_URL: JSON.stringify(process.env.LOGIN_URL),
			BASE_API: JSON.stringify(process.env.BASE_API),
			CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
			GRANT_TYPE: JSON.stringify(process.env.GRANT_TYPE),
		},
	}),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false
		}
	})
]);

config.output.filename = 'js/[name].[hash].js';

config.module.loaders.unshift(
	{
		test: /\.scss/,
		loader: extractCSS.extract('style-loader', ['css?sourceMap&modules&importLoaders=1&localIdentName=[local]', 'postcss', 'resolve-url', 'sass?sourceMap'])
	},
	{
		test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
		loader: 'file',
		include: [
			path.join(project_path, 'src/assets/fonts/')
		],
		query: {
			name: 'fonts/[name].[ext]',
		},
	},
	{
		//IMAGE LOADER
		test: /\.(jpe?g|png|gif|svg)$/i,
		loader: 'file',
		exclude: [
			path.join(project_path, 'src/assets/fonts/')
		],
		query: {
			name: 'images/[name].[hash].[ext]',
		},
	});

module.exports = config;
