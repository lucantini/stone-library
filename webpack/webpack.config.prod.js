var config = require('./webpack.config.default.js'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	extractCSS = new ExtractTextPlugin('css/[name].[chunkhash].css', { allChunks: true }),
	project_path = path.join(__dirname, '../app'),
	webpack = require('webpack'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require("css-mqpacker");

config.plugins = config.plugins.concat([
	extractCSS,
	new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			warnings: false
		}
	})
]);

config.output.filename = 'js/[name].[hash].js';

config.module.rules.unshift({
	test: /\.styl/,
	use: extractCSS.extract({
		fallback: 'style-loader',
		use: [
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					modules: true,
					importLoaders: 1,
					localIdentName: '[local]',
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({ browsers: ['last 2 versions'] }),
						mqpacker()
					],
				},
			},
			{
				loader: 'resolve-url-loader',
			},
			{
				loader: 'stylus-loader',
				options: {
					sourceMap: true,
				}
			}
		],
	}),
}, {
	test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
	use: [
		{
			loader: 'file-loader',
			option: {
				name: 'fonts/[name].[ext]',
			}
		}
	],
	include: [
		path.join(project_path, 'src/assets/fonts/')
	]
});

module.exports = config;
