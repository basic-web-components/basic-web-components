var SRC_DIR = 'src';
var GRUNT_TEST_DIR = 'grunt/test';
var ROOT_DIR = './';
var TEMPLATE_DIR = 'grunt/templates';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-hogan-static');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-text-replace');

  var modules = grunt.file.expand({cwd: SRC_DIR}, 'basic-*');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    src_dir: 'src',
    build_dir: 'build',
    dist_dir: 'dist',

    clean: {
      build: '<%= build_dir %>',
      dist: '<%= dist_dir %>'
    },

    copy: {
      build: {
        expand: true,
        cwd: SRC_DIR,
        src: [
          'basic-*/+(basic-*).+(html|js)',
          'basic-shared/*.js',
          'basic-shared/resources/**',
          '!test/**'],
        dest: '<%= build_dir %>'
      },
      dist: {
        expand: true,
        cwd: '<%= build_dir %>',
        src: ['**/*.html', '**/*.js'],
        dest: '<%= dist_dir %>'
      },
      test: {
        expand: true,
        cwd: GRUNT_TEST_DIR,
        src: ['index.html'],
        dest: '<%= dist_dir %>'
      },
      remote_test: {
        expand: true,
        cwd: GRUNT_TEST_DIR,
        src: ['index.html'],
        dest: '<%= dist_dir %>',
        rename: function(dest, src) {
          return dest + '/remote-test.html';
        }
      },
      bower_dist: {
        expand: true,
        cwd: ROOT_DIR,
        src: ['bower_components/**'],
        dest: '<%= dist_dir %>'
      }
    },

    hogan_static: {
      lib: {
        options:{
          data: {
            modules: modules,
            'basic-shared': grunt.file.expand({cwd: SRC_DIR})
          }
        },
        files: [
          {
            src: TEMPLATE_DIR + '/lib_template.html',
            dest: '<%= build_dir %>/<%= pkg.name %>.html'
          },
          {
            src: TEMPLATE_DIR + '/lib_template.html',
            dest: '<%= build_dir %>/<%= pkg.name %>-polymer.html'
          }
        ]
      }
    },

    replace: {
      bower: {
        src: ['dist/**/*.html'],
        overwrite: true,
        replacements: [{
          from: 'bower_components',
          to: '..'
        }]
      },
      cldr: {
        src: ['dist/basic-web-components.html'],
        overwrite: true,
        replacements: [{
          from: '../../../cldr-data/',
          to: '../bower_components/cldr-data/'
        }]
      },
      remote_test: {
        src: ['dist/remote-test.html'],
        overwrite: true,
        replacements: [{
          from: 'basic-web-components.html',
          to: 'http://hosting.component.kitchen/bwc/v0.6.0/basic-web-components.html'
        }]
      }
    },

    banner: grunt.file.read('BANNER.txt'),

    usebanner: {
      dist: {
        options: {
          banner: '<!--\n<%= banner %>\n-->'
        },
        files: {
          src: [ 'build/basic-web-components.html' ]
        }
      },
      dist_include_polymer: {
        options: {
          banner: '<!--\n<%= banner %>\n-->'
        },
        files: {
          src: [ 'build/basic-web-components-polymer.html' ]
        }
      }
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