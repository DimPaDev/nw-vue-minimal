'use strict';

const path = require('path');
const rm = require('rimraf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cwd = exports.cwd = inputPath => {
	return path.join(process.cwd(), inputPath || '');
};

exports.cleanDirSync = (dir) => {
  console.log(' [ :: ] Cleaning directory : ' + dir);
	rm.sync(`${dir}`);
  console.log(' [ OK ] Cleaned!');
};

exports.cssLoaders = options => {

  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {

    const loaders = [];

    // Extract CSS when that option is specified
    // (which is the case during production build)

    (options.extract)
      ? loaders.push(MiniCssExtractPlugin.loader)
      : loaders.push('vue-style-loader');

    loaders.push(cssLoader);

    if (options.usePostCSS) loaders.push(postcssLoader);

    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }

    return loaders;
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css     : generateLoaders(),
    postcss : generateLoaders(),
    less    : generateLoaders('less'),
    sass    : generateLoaders('sass', { indentedSyntax: true }),
    scss    : generateLoaders('sass', {
    	sassOptions: {
    		// https://github.com/maoberlehner/node-sass-magic-importer
    		importer: require('node-sass-glob-importer')()
    	}
    }),
    stylus  : generateLoaders('stylus'),
    styl    : generateLoaders('stylus')
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = options => {

  const output = [];
  const loaders = exports.cssLoaders(options);
  for (const extension in loaders) {
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loaders[extension]
    });
  }

  return output;
};

exports.assetsPath = (dist, inputPath) => {
  return path.posix.join(dist, inputPath);
};



