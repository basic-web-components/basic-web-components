var SRC_DIR = 'src';

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
        src: ['basic-*/+(basic-*).+(html|js)', 'shared/collectives/*.js', 'basic-helpers/*.js', '!test/**'],
        dest: '<%= build_dir %>'
      },
      dist: {
        expand: true,
        cwd: '<%= build_dir %>',
        src: ['**/*.html', '**/*.js'],
        dest: '<%= dist_dir %>'
      }
    },

    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= build_dir %>',
          src: ['basic-*/*.js', 'shared/collectives/*.js'],
          dest: '<%= build_dir %>'
        }]
      }
    },

    vulcanize: {
      options: {
        inline:true,
        strip:true,
        'strip-excludes':false
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

  // Create HTML imports for Collectives library
  grunt.registerTask('jslib:imports', function() {
    var files = grunt.file.expand({cwd: SRC_DIR + '/shared/collectives/' }, '*.js');

    files.forEach(function(file) {
      var fileName = file.substr(0, file.lastIndexOf('.')) || file;
      grunt.file.write(grunt.config('build_dir') + '/shared/collectives/' + fileName.toLowerCase() + '.html', '<script src=\"' + file + '\"></script>');
    });

    grunt.log.ok();
  });

  grunt.registerTask('build:dist', function(arg){
    grunt.task.run([
      'clean:build',
      'copy:build',
      'vulcanize:shared',
      'vulcanize:modules',
      'vulcanize:dist',
      'usebanner:dist'
    ]);
  });

  grunt.registerTask('build:dev', function() {
    grunt.task.run([
      'clean:build',
      'copy:build'
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

  grunt.registerTask('test', function(version) {
    version = version || 'patch';
    grunt.task.run('bump-only:' + version, 'clean:dist', 'build:dist', 'copy:dist', 'replace:bower');
  });
};