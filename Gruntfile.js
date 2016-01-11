/*
 * Grunt configuration.
 *
 * Note: this file is in ES5. The rest of this project is ES6.
 */

//
// allPackages is the array of npm-publishable packages in this monorepo
//
var allPackages = [
  'basic-arrow-selection',
  'basic-autosize-textarea',
  'basic-carousel',
  'basic-component-mixins',
  'basic-element-base',
  'basic-list-box',
  'basic-page-dots',
  'basic-sliding-viewport',
  'basic-spread-items'
];

//
// Build the buildList object for use in browserify:components
//
function buildBuildList() {
  var obj = {
    'build/basic-web-components.js': ['packages/*/src/*.js'],
    'build/tests.js': ['packages/*/test/*.js']
  };

  for (var i = 0; i < allPackages.length; i++) {
    obj['packages/' + allPackages[i] + '/dist/' + allPackages[i] + '.js'] = ['packages/' + allPackages[i] + '/src/*.js'];
  }

  return obj;
}
var buildList = buildBuildList();
console.dir(buildList);


module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({

    clean: {
      build: 'build'
    },

    browserify: {
      options: {
        browserifyOptions: {
          debug: true
        },
        ignore: false, // Don't ignore node_modules; i.e., process them too
        transform: ['babelify']
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
              grunt.log.writeln(stdout);
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
              grunt.log.writeln(stdout);
            }
            if (cb) {
              cb();
            }
          }
        }
      }
    }

  });

  grunt.registerTask('default', function() {
    grunt.log.writeln('grunt commands this project supports:\n');
    grunt.log.writeln('  grunt build (builds consolidated basic-web-components.js, all package distributions, and all tests)');
    grunt.log.writeln('  grunt lint (runs jshint on all .js files)');
    grunt.log.writeln('  grunt npm-publish:package-name|* (publishes packages/package-name or all packages (packages/*) to npm)');
    grunt.log.writeln('  grunt watch (builds and watches changes to project files)');
  });

  grunt.registerTask('build', ['browserify:buildFiles']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['mocha']);
  grunt.registerTask('watch', ['browserify:watch']);

  grunt.registerTask('npm-addowners', function(package) {
    if (!package || package.length < 1) {
      return grunt.log.error('No package specified');
    }

    grunt.task.run([
      'shell:npm-owner-add:jan.miksovsky:' + package,
      'shell:npm-owner-add:robbear:' + package]);
  });

  grunt.registerTask('npm-publish', function(package) {
    if (!package || package.length < 1) {
      return grunt.log.error('No package specified');
    }

    var packages = [];

    if (package == '*') {
      packages = allPackages;
    }
    else {
      packages.push(package);
    }

    for (var i = 0; i < packages.length; i++) {
      grunt.task.run(['shell:npm-publish:' + packages[i], 'npm-addowners:' + packages[i]]);
    }
  });

};
