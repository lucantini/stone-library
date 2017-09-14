var config = require('./webpack.config.default.js'),
	path = require('path'),
	webpack = require('webpack'),
	project_path = path.join(__dirname, '../app');


config.entry = [
	'react-hot-loader/patch',
	'webpack-hot-middleware/client',
	path.join(project_path, 'src', 'index.js')
];

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
]);

config.module.loaders.unshift(
	{
		test: /\.scss/,
		loaders: [
			'style',
			'css?sourceMap&modules&importLoaders=1&localIdentName=[local]',
			'postcss',
			'resolve-url',
			'sass?sourceMap',
		],
	},
	{
		test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
		loader: 'url',
		include: [
			path.join(project_path, 'src/assets/fonts/'),
		],
		query: {
			name: 'fonts/[name].[ext]',
		},
	},
	{
		// IMAGE LOADER
		test: /\.(jpe?g|png|gif|svg)$/i,
		loader: 'url-loader',
		exclude: [
			path.join(project_path, 'src/assets/fonts/')
		],
	}
);

config.devtool = 'source-map';

module.exports = config;
