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
  webpackHelperTask(true, done);
};

const webpackTask = function(done) {
  webpackHelperTask(false, done);
};

const webpackHelperTask = function(watch, done) {
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
        if (watch) {
          // Do not call task completion callback in the watch case
          gutil.log('Now watching for changes...')
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

    let packOptions = {
      entry: entries,
      output: {
        path: key.substring(0, key.lastIndexOf('/') + 1),
        filename: key.split('/').pop()
      },
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    };
    
    packOptionsArray.push(packOptions);
  }
  
  packOptionsCount = packOptionsArray.length;
  
  packOptionsArray.forEach(packOptions => {
    packIt(packOptions);
  });
};

module.exports = {webpackTask: webpackTask, watchifyTask: watchifyTask};