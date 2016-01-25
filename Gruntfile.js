/*
 * Grunt configuration.
 *
 * Note: this file is in ES5. The rest of this project is ES6.
 *
 * Note to contributors: Consider modifications to the npm publish mechanism,
 * including replacing the use of global variables and, potentially, utilizing a
 * promise-chain of tasks to improve readability of intent.
 */

var fs = require('fs');

//
// allPackages is the global array of npm-publishable packages in this monorepo
//
var allPackages = [
  'basic-arrow-selection',
  'basic-autosize-textarea',
  'basic-carousel',
  'basic-component-mixins',
  'basic-element-base',
  'basic-list-box',
  'basic-modes',
  'basic-page-dots',
  'basic-sliding-viewport',
  'basic-spread-items'
];

// Global array used for reporting successful npm publish tasks
var updatedPublishList = [];

//
// Build the global buildList object for use in browserify:components
//
function buildBuildList() {
  var obj = {
    'build/basic-web-components.js': ['packages/*/src/*.js'],
    'build/tests.js': ['packages/*/test/*.js']
  };

  for (var i = 0; i < allPackages.length; i++) {
    obj['packages/' + allPackages[i] + '/dist/' + allPackages[i] + '.js'] = ['packages/' + allPackages[i] + '/src/*.js'];
  }
  // Special case: the mixins dist get built from its es5globals file.
  obj['packages/basic-component-mixins/dist/basic-component-mixins.js'] = 'packages/basic-component-mixins/es5globals.js';

  return obj;
}
var buildList = buildBuildList();

//
// Build the global docsList array for use in building the package's README.md documentation
//
function buildDocsList() {
  var ary = allPackages.filter(function(item) {
    return item != 'basic-component-mixins';
  }).map(function(item) {
    return {src: 'packages/' + item + '/src/*.js', dest: 'packages/' + item + '/README.md'};
  });

  return ary.concat(buildMixinsDocsList());
}
var docsList = buildDocsList();

//
// Build the portion of docsList that represents the individual source files within
// the basic-component-mixins directory.
//
function buildMixinsDocsList() {
  return fs.readdirSync('packages/basic-component-mixins/src').filter(function(file) {
    return file.indexOf('.js') == file.length - 3;
  }).map(function(file) {
    var fileRoot = file.replace('.js', '');
    return {
      src: 'packages/basic-component-mixins/src/' + file,
      dest: 'packages/basic-component-mixins/docs/' + fileRoot + '.md' };
  });
}

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-saucelabs');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({

    clean: {
      build: 'build'
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        }
      },
      buildFiles: {
        files: buildList
      },
      watch: {
        files: buildList,
        options: {
          keepAlive: true,
          watch: true
        }
      }
    },

    jsdoc2md: {
      docs: {
        options: {
          "global-index-format": "none"
        },
        files: docsList
      }
    },

    jshint: {
      all: [
        'packages/**/*.js',
        '!packages/**/dist/*',
        'test/**/*.js'
      ],
      options: {
        jshintrc: true
      }
    },

    /*
     * NOTE: Mocha tests don't work from the command line yet, as the
     * webcomponents.js polyfill currently triggers a "Parse error" in
     * PhantomJS.
     */
    mocha: {
      test: {
        src: 'test/**/*.html',
        options: {
          log: true,
          logErrors: true,
          run: true
        }
      }
    },

    //
    // The shell section specifies shell-based commands to be executed and is implemented
    // by the Grunt grunt-shell plugin. Shell commands are specified under the "command" key,
    // and any code that needs to be executed upon completion is specified under
    // options/callback.
    //
    shell: {
      'npm-publish': {
        command: function(package) {
          if (!package || package.length < 1) {
            return '';
          }
          return 'npm publish packages/' + package;
        },
        options: {
          stderr: false,
          stdout: false,
          callback: function(err, stdout, stderr, cb) {
            if (err && err.toString().indexOf('E403') < 0) {
                grunt.log.error('Package not published for unexpected reasons: ' + err);
            }
            else if (stdout && stdout.length > 0) {
              var output = stdout.trim();
              grunt.log.writeln(output);
              updatedPublishList.push(output);
            }
            if (cb) {
              cb();
            }
          }
        }
      },

      'npm-owner-add': {
        command: function(owner, package) {
          if (!package || package.length < 1 || !owner || owner.length < 1) {
            return '';
          }
          return 'npm owner add ' + owner + ' ' + package;
        },
        options: {
          stderr: false,
          stdout: false,
          callback: function(err, stdout, stderr, cb) {
            if (err && err.toString().indexOf('E403') < 0) {
              grunt.log.error('Package owner not updated for unexpected reasons: ' + err);
            }
            else if (stdout && stdout.length > 0) {
              var output = stdout.trim();
              grunt.log.writeln(output);
            }
            if (cb) {
              cb();
            }
          }
        }
      }
    }

  });

  //
  // Default task - prints to the console the tasks that are available to be run from the command line
  //
  grunt.registerTask('default', function() {
    grunt.log.writeln('grunt commands this project supports:\n');
    grunt.log.writeln('  grunt build (builds consolidated basic-web-components.js, all package distributions, all documentation, and all tests)');
    grunt.log.writeln('  grunt docs (builds all packages README.md files)');
    grunt.log.writeln('  grunt lint (runs jshint on all .js files)');
    grunt.log.writeln('  grunt npm-publish:package-name|* (publishes packages/package-name or all packages (packages/*) to npm)');
    grunt.log.writeln('  grunt set-version:version (updates package.json version values and dependencies. Ex: grunt set-version:1.0.30)');
    grunt.log.writeln('  grunt watch (builds and watches changes to project files)');
  });

  //
  // The build task is callable from the command line and executes the browserify:buildFiles task
  // defined in the Grunt config. This task builds ES5 transpiled files written to each package's
  // dist folder. A developer who uses "npm install" on that package can import the resulting
  // JavaScript file(s) from the package's dist folder without the need for Babel in an ES5
  // ecosystem.
  //
  // Note that this task also builds each package's README.md file via the jsdocs2md:docs task.
  //
  // This task makes use of the buildList global array.
  //
  grunt.registerTask('build', ['browserify:buildFiles', 'jsdoc2md:docs', 'jshint']);

  //
  // The docs task is callable from the command line and executes the jsdoc2md:docs task defined
  // in the Grunt config. This task builds each package's README.md file from jsdoc tags in the
  // package's src JavaScript files.
  //
  // This task makes use of the docsList global array.
  //
  grunt.registerTask('docs', ['jsdoc2md:docs']);

  //
  // The lint task is callable from the command line and executes the jshint task defined
  // in the Grunt config. This task looks for JavaScript warnings/errors.
  //
  grunt.registerTask('lint', ['jshint']);

  //
  // The test task is callable from the command line and executes the mocha task defined
  // in the Grunt config. This task executes the monorepo's test suite.
  //
  grunt.registerTask('test', ['mocha']);

  //
  // The watch task is callable from the command line and executes the browserify:watch task
  // defined in the Grunt config. This task performs a build and then watches for changes
  // for instant update during development.
  //
  grunt.registerTask('watch', ['browserify:watch']);

  //
  // The npm-publish task is callable from the command line and performs a publish operation
  // to npm for a specified package if named, or all packages in the monorepo when "*" is
  // used as the parameter (grunt npm-publish:*).
  //
  // This task also calls the npm-addowners task which assigns npm package ownership via
  // "npm owner add <ownername> <packagename>". The owners are specified in the npm-addowners
  // task code, referring to npm user accounts.
  //
  // This task makes use of the following globals:
  //
  // allPackages: In the case where "*" is used as the npm-publish parameter, the allPackages
  // global array specifies the list of packages to be published.
  //
  // updatedPublishList: This global array is used to store the list of successfully published
  // packages during the npm-publish run. At the completion of the task, the contents of the
  // updatedPublishList array are printed to the console as a summary.
  //
  grunt.registerTask('npm-publish', function(package) {
    updatedPublishList = [];

    // Handle an improperly specified command line invocation where no package is specified
    if (!package || package.length < 1) {
      return grunt.log.error('No package specified');
    }

    // We'll always assume we have an array of packages to publish, with the degenerate
    // case being a single package.
    var packages = [];

    // If the command line specifies "*", then set the array of packages to the global array, allPackages.
    // Otherwise, just push the single specified package name.
    if (package == '*') {
      packages = allPackages;
    }
    else {
      packages.push(package);
    }

    // For each of the packages in the array, call the Grunt config-based shell task, shell:npm-publish
    // (which uses grunt-shell to execute npm commands), and the task, npm-addowners, to assign
    // npm package ownership.
    //
    // Note that grunt.task.run adds tasks to Grunt's task queue in the order in which they're
    // specified, with the subsequent async operations executed sequentially in that order.
    for (var i = 0; i < packages.length; i++) {
      grunt.task.run(['shell:npm-publish:' + packages[i], 'npm-addowners:' + packages[i]]);
    }

    // Finally, output the summary report to the console regarding successfully published packages.
    // By virtue of Grunt's task queue, this task is guaranteed to run after each of the above
    // publish/addowner operations.
    grunt.task.run(['npm-publish-report']);
  });

  //
  // Helper task that prints to the console the list of successfully published tasks.
  // This task should not be called from the command line.
  //
  grunt.registerTask('npm-publish-report', function() {
    if (updatedPublishList.length <= 0) {
      grunt.log.writeln('No packages published');
      return;
    }

    grunt.log.writeln('Successfully published the following:');
    for (var i = 0; i < updatedPublishList.length; i++) {
      grunt.log.writeln(updatedPublishList[i]);
    }
  });

  //
  // Helper task that uses the Grunt config shell:npm-owner-add task to assign
  // npm account ownership to the specified package. This task should not be
  // called from the command line.
  //
  grunt.registerTask('npm-addowners', function(package) {
    if (!package || package.length < 1) {
      return grunt.log.error('No package specified');
    }

    grunt.task.run([
      'shell:npm-owner-add:jan.miksovsky:' + package,
      'shell:npm-owner-add:robbear:' + package]);
  });

  //
  // Update each of the package.json for allPackages, updating the version value and dependencies
  // on basic-web-components. This mechanism ensures a common version for all items in the monorepo.
  //
  grunt.registerTask('set-version', function(versionString) {
    if (!versionString || versionString == '') {
      grunt.task.run('default');
      return;
    }

    for (var i = 0; i < allPackages.length; i++) {
      var filePath = './packages/' + allPackages[i] + '/package.json';
      var packageJSON = require(filePath);
      packageJSON = updatePackageJSONVersionAndDependencies(allPackages, packageJSON, versionString);
      fs.writeFileSync(filePath, JSON.stringify(packageJSON, null, 2), 'utf-8');
    }
  });

};

function updatePackageJSONVersionAndDependencies(allPackages, packageJSON, versionString) {
  var json = packageJSON;
  json.version = versionString;

  var dependencies = packageJSON.dependencies;
  for (var packageName in dependencies) {
    if (dependencies.hasOwnProperty(packageName) && (allPackages.indexOf(packageName) >= 0)) {
      dependencies[packageName] = '^' + versionString;
    }
  }

  json.dependencies = dependencies;
  return json;
}