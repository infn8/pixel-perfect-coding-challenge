// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
						loader: 'css-loader', // translates CSS into CommonJS modules
					}, {
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [autoprefixer];
							}
						}
					}, {
						loader: 'sass-loader' // compiles Sass to CSS
					}]
				})
			},
			{
				test: /\.svg$/,
				loader: 'svg-url-loader'
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new ExtractTextPlugin('styles.css')
	]
};
