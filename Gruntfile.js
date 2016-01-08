
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
          'packages/basic-spread-items/dist/basic-spread-items.js': ['packages/basic-spread-items/src/*.js']
        },
        options: {
          keepAlive: true,
          watch: true
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'packages/**/*.js', '!packages/**/dist/*'],
      options: {
        jshintrc: true
      }
    }

  });

  grunt.registerTask('default', function() {
    grunt.log.writeln('grunt commands this project supports:\n');
    grunt.log.writeln('  grunt build (builds consolodated basic-web-components.js and all package distributions)');
    grunt.log.writeln('  grunt jshint (runs jshint on this Gruntfile.js and all package *.js files)');
    grunt.log.writeln('  grunt watch (builds and watches changes to project files)');
  });

  grunt.registerTask('build', ['browserify:components']);
  grunt.registerTask('watch', ['browserify:watch']);
};