/*
 * Grunt configuration.
 *
 * Note: this file is in ES5. The rest of this project is ES6.
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha');

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
      components: {
        files: {
          'build/basic-web-components.js': ['packages/*/src/*.js'],
          'packages/basic-arrow-selection/dist/basic-arrow-selection.js': ['packages/basic-arrow-selection/src/*.js'],
          'packages/basic-autosize-textarea/dist/basic-autosize-textarea.js': ['packages/basic-autosize-textarea/src/*.js'],
          'packages/basic-carousel/dist/basic-carousel.js': ['packages/basic-carousel/src/*.js'],
          'packages/basic-component-mixins/dist/basic-component-mixins.js': ['packages/basic-component-mixins/*.js'],
          'packages/basic-element-base/dist/basic-element-base.js': ['packages/basic-element-base/src/*.js'],
          'packages/basic-list-box/dist/basic-list-box.js': ['packages/basic-list-box/src/*.js'],
          'packages/basic-page-dots/dist/basic-page-dots.js': ['packages/basic-page-dots/src/*.js'],
          'packages/basic-sliding-viewport/dist/basic-sliding-viewport.js': ['packages/basic-sliding-viewport/src/*.js'],
          'packages/basic-spread-items/dist/basic-spread-items.js': ['packages/basic-spread-items/src/*.js']
        }
      },
      test: {
        files: {
          'build/tests.js': 'packages/*/test/*.js'
        }
      },
      watch: {
        files: {
          'build/basic-web-components.js': ['packages/*/src/*.js'],
          'packages/basic-arrow-selection/dist/basic-arrow-selection.js': ['packages/basic-arrow-selection/src/*.js'],
          'packages/basic-autosize-textarea/dist/basic-autosize-textarea.js': ['packages/basic-autosize-textarea/src/*.js'],
          'packages/basic-carousel/dist/basic-carousel.js': ['packages/basic-carousel/src/*.js'],
          'packages/basic-component-mixins/dist/basic-component-mixins.js': ['packages/basic-component-mixins/*.js'],
          'packages/basic-element-base/dist/basic-element-base.js': ['packages/basic-element-base/src/*.js'],
          'packages/basic-list-box/dist/basic-list-box.js': ['packages/basic-list-box/src/*.js'],
          'packages/basic-page-dots/dist/basic-page-dots.js': ['packages/basic-page-dots/src/*.js'],
          'packages/basic-sliding-viewport/dist/basic-sliding-viewport.js': ['packages/basic-sliding-viewport/src/*.js'],
          'packages/basic-spread-items/dist/basic-spread-items.js': ['packages/basic-spread-items/src/*.js'],
          'build/tests.js': 'packages/*/test/*.js'
        },
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
        'test/**/*.js',
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
    }

  });

  grunt.registerTask('default', function() {
    grunt.log.writeln('grunt commands this project supports:\n');
    grunt.log.writeln('  grunt build (builds consolidated basic-web-components.js, all package distributions, and all tests)');
    grunt.log.writeln('  grunt lint (runs jshint on all .js files)');
    grunt.log.writeln('  grunt watch (builds and watches changes to project files)');
  });

  grunt.registerTask('build', ['browserify:components', 'browserify:test']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['mocha']);
  grunt.registerTask('watch', ['browserify:watch']);

};
