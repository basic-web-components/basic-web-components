/*jslint node: true */
'use strict';

const gutil = require('gulp-util');
const webpack = require('webpack');
const glob = require('glob');
const allPackages = require('../lib/allPackages');

//
// Build the global buildList object for use in browserifyTask
//
function buildBuildList() {
  const buildList = {
    './build/tests.js': allPackages.map(pkg => `./packages/${pkg}/test/*.js`)
  };
  allPackages.forEach(pkg => {
    buildList[`./packages/${pkg}/dist/${pkg}.js`] = [`./packages/${pkg}/globals.js`];
  });
  buildList['./packages/demos/dist/demos.js'] = ['./packages/demos/src/*.js'];
  return buildList;
}
const buildList = buildBuildList();

const watchifyTask = function(done) {
  webpackHelperTask({minify: false, watch: true}, done);
};

const webpackTask = function(done) {
  webpackHelperTask({minify: true, watch: false}, done);
};

const testWebpackTask = function(done) {
  webpackHelperTask({minify: false, watch: false}, done);
}

const webpackHelperTask = function(options, done) {
  let packOptionsArray = [];
  let processedCount = 0;
  let packOptionsCount = 0;
  
  function packIt(packOptions) {
    webpack(packOptions, function(err, stats) {
      if (err) {
        throw new gutil.PluginError('webpack', err);
      }
      
      gutil.log(`Processed ${packOptions.entry} and wrote ${packOptions.output.path}${packOptions.output.filename}`);
      //gutil.log('[webpack]', stats.toString({}));
      processedCount++;
      if (processedCount >= packOptionsCount) {
        if (options.watch) {
          // Do not call task completion callback in the watch case
          gutil.log('Now watching for changes...');
        }
        else {
          done();
        }
      }
    });
  }
  
  gutil.log('Preparing build...');

  for (let key in buildList) {
    let entries = [];

    buildList[key].forEach(globItem => {
      let a = glob.sync(globItem);
      Array.prototype.push.apply(entries, a);
    });

    let filename = key.split('/').pop();
    if (options.minify) {
      let a = filename.split('.');
      let ext = a.pop();
      filename = '';
      for (let i = 0; i < a.length; i++) {
        filename += a[i];
      }
      filename += '.min.' + ext;
    }
    let packOptions = {
      watch: options.watch,
      entry: entries,
      output: {
        path: key.substring(0, key.lastIndexOf('/') + 1),
        filename: filename,
        sourceMapFilename: filename + '.map'
      },
      devtool: 'source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }        
          }
        ]
      },
      plugins: options.minify ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false // https://github.com/webpack/webpack/issues/1496
          }
        })
      ] :
      []
    };
    
    packOptionsArray.push(packOptions);
  }
  
  packOptionsCount = packOptionsArray.length;
  
  packOptionsArray.forEach(packOptions => {
    packIt(packOptions);
  });
};

module.exports = {webpackTask: webpackTask, testWebpackTask: testWebpackTask, watchifyTask: watchifyTask};