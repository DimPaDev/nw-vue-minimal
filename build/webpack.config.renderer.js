const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const VueTemplateCompiler = require('vue-template-compiler');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Internal Dependencies
const _ = require('./utils.js');
const IgnoreOption = require('./plugins/empty-plugin');

const selectedBabelMode = 'modern';
const isModernBabel = selectedBabelMode === 'modern';

const selectedBuildMode = process.env.NODE_ENV;
const isDev = selectedBuildMode === 'development';
const isProd = selectedBuildMode === 'production';

const SRC = 'app/renderer';
const DST = 'build/dist';

module.exports = {

		target: 'node-webkit',

		entry: [
			_.cwd(`./${SRC}/main.mjs`)
		],

    output: {
      filename: isModernBabel ? 'main.mjs' : 'main.es5.js',
      path: _.cwd(`./${DST}`)
    },

    module: {

        rules: [
					{
						test: isModernBabel ? /\.m?js$/i : /\.js$/i,
						use: {
							loader: 'babel-loader',
							options: {
								// Points to env.modern or env.legacy in babel.config.js
								envName: isModernBabel ? 'modern' : 'legacy',
								configFile: _.cwd('./.babel.config.js')
							}
						},
						include: [
							_.cwd(`./${SRC}`),
							_.cwd('./node_modules/webpack-dev-server/client')
						],
						exclude: (modulePath) => {
							return /node_modules/.test(modulePath);
								// && !/node_modules(\/|\\)mod-name/.test(modulePath);
						}
					},
					{
						test: /\.pug$/,
						loader: 'pug-plain-loader'
					},
					{
						test: /\.vue$/,
						loader: 'vue-loader',
						options: {
							compiler: VueTemplateCompiler,
							cacheBusting: true,
							transformAssetUrls: {
								video: ['src', 'poster'],
								source: 'src',
								img: 'src',
								image: 'xlink:href'
							}
						}
					},

					{
						test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
						loader: 'url-loader',
						options: {
							esModule: false,
							limit: 10000,
							name: _.assetsPath('static', 'img/[name].[hash:7].[ext]')
						}
					},

			].concat(_.styleLoaders({
					sourceMap: false,
					extract: isProd,
					usePostCSS: true
			}))
    },

    resolve: {
			extensions: ['.js', '.vue', '.json'],
			modules: [
				'node_modules',
				_.cwd(`./${SRC}`)
			],
			alias: {
				vue: 'vue/dist/vue.js',
				'@' : _.cwd(`./${SRC}`),
				'@components' : _.cwd(`./${SRC}/components`)
			}
    },

    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
	    new CopyWebpackPlugin([
				{ from: _.cwd(`./${SRC}/static`), to: './' }
			]),
      new HtmlWebpackPlugin({
        title: 'Vue.js Template',
				template: _.cwd(`./${SRC}/assets/templates/index.ejs`),
				filename: _.cwd(`./${DST}/index.html`),
				inject: true,
				minify: true
      }),
      new ScriptExtHtmlWebpackPlugin({
        module: 'main.mjs',
        custom: [{ test: /\.es5.js$/, attribute: 'nomodule' }]
      }),
			(isProd) ? new MiniCssExtractPlugin({
        filename: _.assetsPath('static', 'css/[name].[chunkhash].css'),
      }) : new IgnoreOption()
		],

		optimization: isProd ? {
			namedModules: true,
			concatenateModules: true,
			usedExports: true,
			splitChunks: {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						name: 'vendor',
						test: /[\\/]node_modules[\\/]/,
						enforce: true
					}
				}
			},
			runtimeChunk: 'single',
			minimizer: [
				new TerserPlugin({
					test: isModernBabel ? /\.m?js$/i : /\.js$/i,
					sourceMap: false,
					parallel: true,
					terserOptions: {
						ecma: isModernBabel ? 2018 : 5,
						warnings: false,
						parse: {},
						compress: {
							inline: false,
							drop_console: true
						},
						mangle: true,
						module: false,
						output: null,
						toplevel: false,
						nameCache: null,
						ie8: false,
						keep_classnames: true,
						keep_fnames: true,
						safari10: false
					}
				})
			]
		} : {}

};
