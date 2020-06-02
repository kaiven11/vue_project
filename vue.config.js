const path = require('path');

const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('pages',resolve('src/pages'))
            .set('utils',resolve('src/utils'))
    },
	
	configureWebpack: config => {

		plugins: [
			// Ignore all locale files of moment.js
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

			// 配置compression-webpack-plugin压缩
			new CompressionWebpackPlugin({
				algorithm: 'gzip',
				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
				threshold: 10240,
				minRatio: 0.8
			}),
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 5,
				minChunkSize: 100
			})
		]

	        if (process.env.NODE_ENV === 'production') {
	            // 为生产环境修改配置...
	            config.plugins.push(
	                //生产环境自动删除console
	                new UglifyJsPlugin({
	                    uglifyOptions: {
	                        compress: {
	                            
	                            drop_debugger: true,
	                            drop_console: true,
	                        },
							warnings: false,
	                    },
	                    sourceMap: false,
	                    parallel: true,
	                })
	            );
	        }
	    },



	

}