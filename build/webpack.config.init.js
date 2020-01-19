const path = require('path');
const webpack = require('webpack');
const _ = require('./utils.js');

module.exports = {

  target: 'node-webkit',

  entry: _.cwd('app/init.js'),

  output: {
    path: _.cwd('./build/dist'),
    filename: 'init.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Points to env.modern or env.legacy in babel.config.js
            envName: 'modern',
            configFile: _.cwd(`./.babel.config.js`)
          }
        }
			},

      {
        test: /\.(png|jpg|gif)$/,
        use: "url-loader"
      },

			/*
      {
        test: /\.node$/,
        use: {
          loader: "node-addon-loader",
          options: {
            basePath: config.common.distRoot
          }
        }
			}
			*/
    ]
  },

  resolve: {
    alias: {
			vue: 'vue/dist/vue.js',
			'@' : _.cwd('./app/renderer'),
			'@components' : _.cwd('./app/renderer/components')
		},
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ],

  node: {
    __dirname: false,
    __filename: false
  }

};
