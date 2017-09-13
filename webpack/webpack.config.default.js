const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	FlowStatusWebpackPlugin = require('flow-status-webpack-plugin'),
	autoprefixer = require('autoprefixer'),
	mqpacker = require("css-mqpacker"),
	project_path = path.join(__dirname, '../app'),
	dist_path = path.join(__dirname, '../public');

const config = {
	entry: [
		path.join(project_path, 'src', 'index.js')
	],
	output: {
		path: dist_path,
		filename: 'js/[name].js',
		publicPath: '/'
	},
	resolve: {
		modules: [
			project_path,
			"node_modules"
		],
		alias: {
			images: 'src/assets/images'
		}
	},
	plugins: [
		new CleanWebpackPlugin(['public'], { root: path.resolve(__dirname, '..'), verbose: true }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../views/index.ejs'),
			inject: 'body',
			filename: 'index.ejs'
		}),
		new FlowStatusWebpackPlugin({
			restartFlow: false,
			failOnError: true
		})
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'eslint-loader',
				// define an exclude so we check just the files we need
				exclude: [/(node_modules)/, /\*spec.js/]
			},
			{
				test: /\.js$/,
				exclude: [
					/(node_modules)/, /\*spec.js/
				],
				loader: 'babel-loader',
			}, {
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
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
						loader: 'resolve-url-loader',
					},
				],
			}, {
				//IMAGE LOADER
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
						}
					},
					{
						loader: 'url-loader',
					}
				],
				exclude: [
					path.join(project_path, 'src/assets/fonts/')
				],
			}, {
				// HTML LOADER
				test: /\.html$/,
				use: [
					{ loader: 'html-loader' }
				],
			},
			{
				// HTML LOADER
				test: /\.ejs$/,
				use: [
					{ loader: 'html-loader' }
				],
			}
		]
	},
};

require.extensions['.png'] = function () {};
require.extensions['.jpg'] = function () {};

module.exports = config;
