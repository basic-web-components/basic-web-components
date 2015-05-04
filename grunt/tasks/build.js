var SRC_DIR = 'src';
var GRUNT_TEST_DIR = 'grunt/test';
var ROOT_DIR = './';
var TEMPLATE_DIR = 'grunt/templates';

var exec = require("child_process").exec;

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
        src: ['basic-*/+(basic-*).+(html|js)', 'shared/collectives/*.js', 'shared/basic-helpers/*.js', '!test/**'],
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
      bower_test: {
        expand: true,
        cwd: ROOT_DIR,
        src: ['bower_components/**'],
        dest: '<%= dist_dir %>'
      }
    },

    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= build_dir %>',
          src: ['basic-*/*.js', 'shared/collectives/*.js', 'shared/basic-helpers/*.js'],
          dest: '<%= build_dir %>'
        }]
      }
    },

    hogan_static: {
      lib: {
        options:{
          data: {
            modules: modules,
            shared: grunt.file.expand({ cwd: SRC_DIR })
          }
        },
        files: [{
          src: TEMPLATE_DIR + '/lib_template.html',
          dest: '<%= build_dir %>/<%= pkg.name %>.html'
        }]
      }
    },

    vulcanize: {
      options: {
        inline:true,
        'strip-excludes':true,

        // Comment out the following line for verbose output files
        //strip:true
      },
      shared: {
        files: [{
          expand: true,
          cwd: '<%= build_dir %>',
          src: ['shared/**/*.html'],
          dest: '<%= build_dir %>'
        }]
      },
      modules: {
        options:{
          excludes: {
            imports: ['.*\.html']
          }
        },
        files: [{
          expand: true,
          cwd: '<%= build_dir %>',
          src: ['basic-*/basic-*.html'],
          dest: '<%= build_dir %>'
        }]
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
      }
    },

    banner: grunt.file.read('BANNER.txt'),

    usebanner: {
      jscss: {
        options: {
          banner: '/**\n<%= banner %>\n*/'
        },
        files: {
          src: [ 'src/**/*.js', 'src/**/*.scss' ]
        }
      },
      html: {
        options: {
          banner: '<!--\n<%= banner %>\n-->'
        },
        files: {
          src: [ 'src/basic-*/basic-*.html' ]
        }
      },
      dist: {
        options: {
          banner: '<!--\n<%= banner %>\n-->'
        },
        files: {
          src: [ 'build/basic-web-components.html' ]
        }
      }
    },

    bump: {
      options: {
        files: [ 'package.json', 'bower.json' ],
        commitFiles: [ 'package.json', 'bower.json', 'dist/*' ],
        updateConfigs: ['pkg'],
        push: true,
        pushTo: 'origin'
      }
    }

  });

  // Create HTML imports for shared folders
  grunt.registerTask('jslib:imports', function() {
    var dirs = ['collectives', 'basic-helpers'];

    for (var i = 0; i < dirs.length; i++) {
      var files = grunt.file.expand({cwd: SRC_DIR + '/shared/' + dirs[i] + '/' }, '*.js');

      files.forEach(function(file) {
        var fileName = file.substr(0, file.lastIndexOf('.')) || file;
        grunt.file.write(grunt.config('build_dir') + '/shared/' + dirs[i] + '/' + fileName.toLowerCase() + '.html', '<script src=\"' + file + '\"></script>');
      });
    }

    grunt.log.ok();
  });

  grunt.registerTask('build:dist', function(arg){
    grunt.task.run([
      'clean:build',
      'copy:build',
      'hogan_static:lib',
      'vulcanize:shared',
      'vulcanize:modules',
      'vulcanize:dist',
      'usebanner:dist'
    ]);
  });

  grunt.registerTask('build:dev', function() {
    grunt.task.run([
      'clean:build',
      'copy:build',
      'hogan_static:lib'
    ]);
  });

  function execCmd(cmd, onExecuted) {
    exec( cmd, function(error, stdout, stderr) {
      error && console.error(error);
      stderr && console.error(stderr);
      stdout && console.log(stdout);
      onExecuted();
    });
  }

  grunt.registerTask('stage-release', 'Stage release files.', function() {
    execCmd('git add ' + grunt.config('dist_dir') + '/*', this.async() );
  });

  grunt.registerTask('default', ['build:dev']);

  grunt.registerTask('release', function(version){
    version = version || 'patch';
    grunt.task.run( 'bump-only:' + version, 'clean:dist', 'build:dist', 'copy:dist', 'replace:bower', 'build:docs', 'stage-release', 'bump-commit');
  });

  grunt.registerTask('build:test', function(version) {
    version = version || 'patch';
    grunt.task.run('clean:dist', 'build:dist', 'copy:dist', 'replace:bower', 'copy:test', 'copy:bower_test');
  });
};