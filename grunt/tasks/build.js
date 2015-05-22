var SRC_DIR = 'src';
var GRUNT_TEST_DIR = 'grunt/test';
var ROOT_DIR = './';
var TEMPLATE_DIR = 'grunt/templates';

module.exports = function(grunt) {

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

    vulcanize: {
      options: {
        inline:true,
        'strip-excludes':true,

        // Comment out the following line for verbose output files
        //strip:true
      },
      dist: {
        options:{
          excludes: {
            imports: ['polymer.html']
          }
        },
        files: {
          '<%= build_dir %>/<%= pkg.name %>.html' : '<%= build_dir %>/<%= pkg.name %>.html'
        }
      },
      dist_include_polymer: {
        options:{
        },
        files: {
          '<%= build_dir %>/<%= pkg.name %>-polymer.html' : '<%= build_dir %>/<%= pkg.name %>-polymer.html'
        }
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
      remote_test: {
        src: ['dist/remote-test.html'],
        overwrite: true,
        replacements: [{
          from: 'basic-web-components.html',
          to: 'http://hosting.component.kitchen/bwc/v0.6.0-preview/basic-web-components.html'
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

    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commitFiles: ['package.json', 'bower.json', 'dist/*'],
        updateConfigs: ['pkg'],
        push: true,
        pushTo: 'origin'
      }
    }

  });

  grunt.registerTask('build:dist', function(arg) {
    grunt.task.run([
      'clean:build',
      'copy:build',
      'hogan_static:lib',
      'vulcanize:dist',
      'vulcanize:dist_include_polymer',
      'usebanner:dist',
      'usebanner:dist_include_polymer'
    ]);
  });

  grunt.registerTask('build:dev', function() {
    grunt.task.run([
      'clean:build',
      'copy:build',
      'hogan_static:lib'
    ]);
  });

  grunt.registerTask('default', ['build:release']);

  grunt.registerTask('mod_test_for_remote', function() {
    grunt.task.run('copy:remote_test', 'replace:remote_test');
  });

  grunt.registerTask('build:release', function(version) {
    version = version || 'patch';
    grunt.task.run('clean:dist', 'build:dist', 'copy:dist', 'replace:bower', 'copy:test', 'mod_test_for_remote', 'copy:bower_dist');
  });
};
