var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离代码
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'); // css压缩

module.exports = {
	context: __dirname,
	entry: {
		app: path.resolve(__dirname, 'app/index.jsx')
	}, 
	output: {
		path: __dirname + '/build',
		filename: 'js/[name].[chunkhash:8].js'
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

		// css分离
		new ExtractTextPlugin({
	    filename: 'css/[name]-[chunkhash].min.css',
	    allChunks: false,
	  }),

		// css 压缩
	  new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

	  // js公众部分提取
	  new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    filename: 'js/vendor-[chunkhash].min.js',
	  }),

	  // js压缩
	  new webpack.optimize.UglifyJsPlugin({
	    compress: {
	      warnings: false,
	      drop_console: false,
	    }
	  }),
	  
		// webpack 内置 banner-plugin
		new webpack.BannerPlugin('Copyright by sling'),

		// HTML 模板
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tpl.html',
			filename: 'index.html',
			inject: 'body'
		}),

		// 可在业务js代码中使用__DEV__是否为dev模式(往前端塞入一个全局变量)
		new webpack.DefinePlugin({
			__DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		})

	]

}