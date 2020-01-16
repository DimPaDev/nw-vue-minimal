const selectedBabelMode = process.env._BABEL_MODE;
const selectedBuildMode = process.env.NODE_ENV;

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
const _ = require('./utils.js');
const IgnoreOption = require('./plugins/empty-plugin');

console.log('  -- BABEL MODE SELECTED : ' + selectedBabelMode);

const isModernBabel = selectedBabelMode === 'modern';
const isLegacyBabel = selectedBabelMode === 'legacy';
const isDev = selectedBuildMode === 'development';
const isProd = selectedBuildMode === 'production';

module.exports = {

    entry: _.cwd('./src/main.mjs'),

    output: {
      filename: isModernBabel ? 'main.mjs' : 'main.es5.js',
      path: _.cwd('./build/dist')
    },

    module: {
        rules: [
					{
						test: isModernBabel ? /\.m?js$/i : /\.js$/i,
						use: {
							loader: "babel-loader",
							options: {
								// Points to env.modern or env.legacy in babel.config.js
								envName: isModernBabel ? 'modern' : 'legacy',
								configFile: _.cwd('./.babel.config.js')
							}
						},
						include: [
							_.cwd('./src'),
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
					}
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
				_.cwd(`./src`)
			],
			alias: {
				vue: 'vue/dist/vue.js',
				'@' : _.cwd('./src'),
				'@components' : _.cwd('./src/components')
			}
    },

    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
	    new CopyWebpackPlugin([{ from: _.cwd('./src/static'), to: './' }]),
      new HtmlWebpackPlugin({
        title: 'Prova',
				template: _.cwd('./build/templates/index.html'),
				filename: _.cwd('./build/dist/index.html'),
        inject: true
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
			namedModules: true, // NamedModulesPlugin()
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
						ecma: isModernBabel ? 8 : 5,
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
