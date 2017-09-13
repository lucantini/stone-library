var config = require('./webpack.config.default.js'),
	path = require('path'),
	webpack = require('webpack'),
	project_path = path.join(__dirname, '../app'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require("css-mqpacker");


config.devServer = {
	port: process.env.PORT || 3333,
	host: process.env.HOST || '0.0.0.0'
};

config.entry = [
	'react-hot-loader/patch',
	'webpack-hot-middleware/client',
	path.join(project_path, 'src', 'index.js')
];

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })
]);

config.module.rules.unshift({
	test: /\.styl/,
	use: [
		{ loader: 'style-loader' },
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
					mqpacker(),
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
}, {
	test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
	use: [{
		loader: 'url-loader',
		options: {
			name: 'fonts/[name].[ext]'
		}
	}],
	include: [
		path.join(project_path, 'src/assets/fonts/')
	],
});

config.devtool = 'source-map';

module.exports = config;
