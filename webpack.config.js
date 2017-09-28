var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: path.resolve(__dirname, 'app/index.jsx'), // 入口文件
	output: {
		filename: 'bundle.js' // 开发环境下打包输出文件名
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.(jsx|js)$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ["env", "react"]
				}
			}]
		}, {
			test: /\.less$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			use: [
				'style-loader', {
					loader: 'css-loader'
						/*,
												options: {
													importLoaders = 1
												}*/
						//指的是在cssloader之后指定的资源数量
				}, {
					loader: 'postcss-loader',
					//postcssLoader放在cssLoader后面，如果以@import方式引入，css必须加上importLoaders属性，而使用less|sass则不用，less|sass中已经对齐进行了相应的处理
					options: {
						plugins: [
							require('autoprefixer')
						]
					}
				}, {
					loader: 'less-loader'
				}
			]
		}, {
			test: /\.css$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			use: [
				'style-loader', {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
					//指的是在cssloader之后指定的资源数量
				}, {
					loader: 'postcss-loader',
					//postcssLoader放在cssLoader后面，如果以@import方式引入，css必须加上importLoaders属性，而使用less|sass则不用，less|sass中已经对齐进行了相应的处理
					options: {
						plugins: [
							require('autoprefixer')
						]
					}
				}
			]
		}, {
			test: /\.html$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			use: ['html-loader']
		}, {
			test: /\.(png|gif|jpg|jpeg|bmp)$/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 5000,
					name: '../img/[name]-[hash:5].[ext]'
				}
			}, {
				loader: 'image-webpack-loader' // 压缩图片
			}]
		}, {
			test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 5000,
					name: '../img/[name]-[hash:5].[ext]'
				}
			}, {
				loader: 'image-webpack-loader' // 压缩图片
			}]
		}]
	},
	plugins: [
		// HTML 模板
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html',
			inject: 'body'
		}),

		// 热加载
		new webpack.HotModuleReplacementPlugin(),

		// 打开浏览器
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		}),

		// 可在业务js代码中使用__DEV__是否为dev模式(往前端塞入一个全局变量)

		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		})

	],
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				secure: false
			}
		},
		historyApiFallback: true, // 不跳转，在单页面应用时非常管用，它依赖于HTML5 history API,如果设置为true，所有跳转指向index页
		inline: true, //实时刷新
		hot: true // 使用热加载插件 HotModuleReplacementPlugin
	}

}