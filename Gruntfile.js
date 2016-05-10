/*
 * Grunt configuration.
 *
 * Note to contributors: Consider modifications to the npm publish mechanism,
 * including replacing the use of global variables and, potentially, utilizing a
 * promise-chain of tasks to improve readability of intent.
 */

/*jslint node: true */
'use strict';

let fs = require('fs');
let path = require('path');
let jsDocParse = require('jsdoc-parse');
let dmd = require('dmd');
let Readable = require('stream').Readable;

//
// allPackages is the global array of npm-publishable packages in this monorepo.
// This is all folders inside the /packages folder that start with the prefix
// "basic-".
const PACKAGE_FOLDER = 'packages';
const allPackages = fs.readdirSync(PACKAGE_FOLDER).filter(fileName => {
  let filePath = path.join(PACKAGE_FOLDER, fileName);
  let stat = fs.statSync(filePath);
  return stat && stat.isDirectory() && fileName.startsWith('basic-');
});

// Global array used for reporting successful npm publish tasks
let updatedPublishList = [];

//
// Build the global buildList object for use in browserify:components
//
function buildBuildList() {

  let srcFiles = allPackages.map(pkg => {
    return 'packages/' + pkg + '/src/*.js';
  });
  let testFiles = allPackages.map(pkg => {
    return 'packages/' + pkg + '/test/*.js';
  });

  let obj = {
    'build/basic-web-components.js': srcFiles,
    'build/tests.js': testFiles
  };

  allPackages.forEach(pkg => {
    obj['packages/' + pkg + '/dist/' + pkg + '.js'] = ['packages/' + pkg + '/src/*.js'];
  });

  // Special cases: dist gets built from the es5globals file.
  obj['packages/basic-component-mixins/dist/basic-component-mixins.js'] = 'packages/basic-component-mixins/es5globals.js';
  obj['packages/basic-wrapped-standard-element/dist/basic-wrapped-standard-element.js'] = 'packages/basic-wrapped-standard-element/es5globals.js';

  return obj;
}
const buildList = buildBuildList();

//
// Build the global docsList array for use in building the package's README.md documentation
//
function buildDocsList() {
  let ary = allPackages.filter(item => {
    return item != 'basic-component-mixins';
  }).map(item => {
    return {src: 'packages/' + item + '/src/*.js', dest: 'packages/' + item + '/README.md'};
  });

  return ary.concat(buildMixinsDocsList());
}
const docsList = buildDocsList();

//
// Build the portion of docsList that represents the individual source files within
// the basic-component-mixins directory.
//
function buildMixinsDocsList() {
  return fs.readdirSync('packages/basic-component-mixins/src').filter(file => {
    return file.indexOf('.js') == file.length - 3;
  }).map(file => {
    let fileRoot = file.replace('.js', '');
    return {
      src: 'packages/basic-component-mixins/src/' + file,
      dest: 'packages/basic-component-mixins/docs/' + fileRoot + '.md' };
  });
}

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-saucelabs');
  grunt.loadNpmTasks('grunt-shell');

  //
  // Browsers to use for testing via SauceLabs
  const browsers = [
    {
      browserName: 'chrome',
      platform: 'OS X 10.11',
      version: '47.0'
    },
    {
      browserName: 'firefox',
      platform: 'OS X 10.11',
      version: '41.0'
    },
    {
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11.0'
    },
    {
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      version: '20.10240'
    }
  ];

  grunt.initConfig({

    //
    // Used for SauceLabs testing
    //
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

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

    jshint: {
      all: [
        'Gruntfile.js',
        'packages/**/*.js',
        '!packages/**/dist/*',
        '!packages/**/lib/*',
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
        src: 'test/index.html',
        options: {
          log: true,
          logErrors: true,
          run: true
        }
      }
    },

    //
    // Set local environment variables, SAUCE_USERNAME and SAUCE_ACCESS_KEY, on your machine.
    // You may need to request these values from the sponsors of the Basic Web Components project.
    //
    'saucelabs-mocha': {
      all: {
        options: {
          urls: [
            'http://127.0.0.1:9999/test/saucelabs-tests.html'
          ],
          browsers: browsers,
          testname: 'Basic Web Components Tests',
          throttled: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
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
        command: function(pkg) {
          if (!pkg || pkg.length < 1) {
            return '';
          }
          return 'npm publish packages/' + pkg;
        },
        options: {
          stderr: false,
          stdout: false,
          callback: function(err, stdout, stderr, cb) {
            if (err && err.toString().indexOf('E403') < 0) {
                grunt.log.error('Package not published for unexpected reasons: ' + err);
            }
            else if (stdout && stdout.length > 0) {
              let output = stdout.trim();
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
        command: function(owner, pkg) {
          if (!pkg || pkg.length < 1 || !owner || owner.length < 1) {
            return '';
          }
          return 'npm owner add ' + owner + ' ' + pkg;
        },
        options: {
          stderr: false,
          stdout: false,
          callback: function(err, stdout, stderr, cb) {
            if (err && err.toString().indexOf('E403') < 0) {
              grunt.log.error('Package owner not updated for unexpected reasons: ' + err);
            }
            else if (stdout && stdout.length > 0) {
              let output = stdout.trim();
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
    grunt.log.writeln('  grunt devbuild (same as build minus building the documentation)');
    grunt.log.writeln('  grunt docs (builds all packages README.md files)');
    grunt.log.writeln('  grunt lint (runs jshint on all .js files)');
    grunt.log.writeln('  grunt npm-publish:package-name|* (publishes packages/package-name or all packages (packages/*) to npm)');
    grunt.log.writeln('  grunt set-version:version (updates package.json version values and dependencies. Ex: grunt set-version:1.0.30)');
    grunt.log.writeln('  grunt saucelabs (Runs SauceLabs tests. You must set environment variables SAUCE_USERNAME and SAUCE_ACCESS_KEY.)');
    grunt.log.writeln('  grunt watch (builds and watches changes to project files)');
  });

  //
  // The build task is callable from the command line and executes the browserify:buildFiles task
  // defined in the Grunt config. This task builds ES5 transpiled files written to each package's
  // dist folder. A developer who uses "npm install" on that package can import the resulting
  // JavaScript file(s) from the package's dist folder without the need for Babel in an ES5
  // ecosystem.
  //
  // Note that this task also builds each package's README.md file via the docs task.
  //
  // This task makes use of the buildList global array.
  //
  grunt.registerTask('build', ['browserify:buildFiles', 'docs', 'jshint']);

  //
  // The devbuild task is callable from the command line and is similar to the build task but doesn't
  // build the documentation files. This is meant as a quicker task for developers actively working
  // on code.
  //
  grunt.registerTask('devbuild', ['browserify:buildFiles', 'jshint']);

  //
  // The docs task is callable from the command line. This task builds each package's
  // README.md file from jsdoc tags in the package's src JavaScript files.
  //
  // This task makes use of the docsList global array.
  //
  grunt.registerTask('docs', function() {
    let done = this.async();
    return mapAndChain(docsList, doc => buildMarkdownDoc(doc, grunt))
    .then(() =>
      done()
    )
    .catch(err =>
      grunt.log.error(err)
    );
  });

  //
  // The lint task is callable from the command line and executes the jshint task defined
  // in the Grunt config. This task looks for JavaScript warnings/errors.
  //
  grunt.registerTask('lint', ['jshint']);

  //
  // The saucelabs task is callable from the command line and executes unit tests on SauceLabs
  //
  grunt.registerTask('saucelabs', ['connect', 'saucelabs-mocha']);

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
  grunt.registerTask('npm-publish', function(pkg) {
    updatedPublishList = [];

    // Handle an improperly specified command line invocation where no package is specified
    if (!pkg || pkg.length < 1) {
      return grunt.log.error('No package specified');
    }

    // We'll always assume we have an array of packages to publish, with the degenerate
    // case being a single package.
    let packages = [];

    // If the command line specifies "*", then set the array of packages to the global array, allPackages.
    // Otherwise, just push the single specified package name.
    if (pkg == '*') {
      packages = allPackages;
    }
    else {
      packages.push(pkg);
    }

    // For each of the packages in the array, call the Grunt config-based shell task, shell:npm-publish
    // (which uses grunt-shell to execute npm commands), and the task, npm-addowners, to assign
    // npm package ownership.
    //
    // Note that grunt.task.run adds tasks to Grunt's task queue in the order in which they're
    // specified, with the subsequent async operations executed sequentially in that order.
    for (let i = 0; i < packages.length; i++) {
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
    for (let i = 0; i < updatedPublishList.length; i++) {
      grunt.log.writeln(updatedPublishList[i]);
    }
  });

  //
  // Helper task that uses the Grunt config shell:npm-owner-add task to assign
  // npm account ownership to the specified package. This task should not be
  // called from the command line.
  //
  grunt.registerTask('npm-addowners', function(pkg) {
    if (!pkg || pkg.length < 1) {
      return grunt.log.error('No package specified');
    }

    grunt.task.run([
      'shell:npm-owner-add:jan.miksovsky:' + pkg,
      'shell:npm-owner-add:robbear:' + pkg]);
  });

  //
  // Update each of the package.json for allPackages, updating the version value and dependencies
  // on basic-web-components. This mechanism ensures a common version for all items in the monorepo.
  // This task also updates the version of the root package.json.
  //
  grunt.registerTask('set-version', function(versionString) {
    if (!versionString || versionString === '') {
      grunt.task.run('default');
      return;
    }

    for (let i = 0; i < allPackages.length; i++) {
      let filePath = './packages/' + allPackages[i] + '/package.json';
      let packageJSON = require(filePath);
      packageJSON = updatePackageJSONVersionAndDependencies(allPackages, packageJSON, versionString);
      fs.writeFileSync(filePath, JSON.stringify(packageJSON, null, 2), 'utf-8');
    }

    let filePath = './package.json';
    let packageJSON = require(filePath);
    packageJSON.version = versionString;
    fs.writeFileSync(filePath, JSON.stringify(packageJSON, null, 2), 'utf-8');
  });
};

function buildMarkdownDoc(docItem, grunt) {
  grunt.log.writeln('Building ' + docItem.dest + ' from ' + docItem.src);

  return parseScriptToJSDocJSON(docItem.src)
  .then(json => {
    return mergeMixinDocs(json, grunt);
  })
  .then(json => {
    // Sort the array, leaving the order:0 item alone at the
    // front of the list (the class identifier section)
    json.sort((a, b) => {
      if (a.order === 0) { return -1; }
      if (b.order === 0) { return 1; }

      return a.name.localeCompare(b.name);
    });

    // Set the order value
    json.map((item, index) => {
      item.order = index;
    });

    // Convert the JSON to Markdown
    return parseJSONToMarkdown(json, grunt);
  })
  .then(function(string) {
    // Write to the output markdown file
    return new Promise(function(resolve, reject) {
      fs.writeFile(docItem.dest, string, 'utf-8', function (err) {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

function parseScriptToJSDocJSON(src) {
  return new Promise((resolve, reject) => {
    // Start by parsing the jsdoc into a stream which will contain
    // the jsdoc represented in JSON
    let stream = jsDocParse({src: src});

    // Convert the stream to jsdoc JSON
    let string = '';
    stream.setEncoding('utf8');
    stream.on('data', chunk => {
      string += chunk;
    })
    .on('end', () => {
      let json = JSON.parse(string);
      resolve(json);
    })
    .on('error', err => {
      reject(err);
    });
  });
}

function parseJSONToMarkdown(json, grunt) {
  return new Promise(function(resolve, reject) {
    // Create a new readable stream, holding the stringified JSON
    let string = '';
    let s = new Readable();
    s._read = function noop() {};
    s.push(JSON.stringify(json));
    s.push(null);

    // Use dmd to create the markdown string which we will
    // write to an output .md file (NYI)
    const partials = [
      './grunt/templates/main.hbs',
      './grunt/templates/scope.hbs',
      './grunt/templates/mixes.hbs',
      './grunt/templates/mixin-linked-type-list.hbs'];
    let dmdStream = dmd({partial: partials, 'global-index-format': 'none', 'group-by': ['none']});
    s.pipe(dmdStream);
    dmdStream.setEncoding('utf8');
    dmdStream.on('data', data => {
      string += data;
    })
    .on('end', () => {
      // string now holds the markdown text
      resolve(string);
    })
    .on('error', err => {
      reject(err);
    });
  });
}

function mergeMixinDocs(componentJson, grunt) {
  if (componentJson[0].mixes == null || componentJson[0].mixes === undefined) {
    return componentJson;
  }

  let mixins = componentJson[0].mixes.map(mixin => {
    return 'packages/basic-component-mixins/src/' + mixin + '.js';
  });

  let hostId = componentJson[0].id;
  return mapAndChain(mixins, mixin => mergeMixinIntoBag(mixin, componentJson, hostId))
  .then(() =>
    componentJson
  );
}

function mergeMixinIntoBag(mixinPath, componentJson, hostId) {
  return parseScriptToJSDocJSON(mixinPath)
  .then(mixinJson => {
    for (let i = 1; i < mixinJson.length; i++) {
      if (mixinJson[i].memberof != null && mixinJson[i].memberof != hostId) {
        mixinJson[i].originalmemberof = mixinJson[i].memberof;
        mixinJson[i].memberof = hostId;
      }
      componentJson.push(mixinJson[i]);
    }
  });
}

function updatePackageJSONVersionAndDependencies(allPackages, packageJSON, versionString) {
  let json = packageJSON;
  json.version = versionString;

  let dependencies = packageJSON.dependencies;
  for (let packageName in dependencies) {
    if (dependencies.hasOwnProperty(packageName) && (allPackages.indexOf(packageName) >= 0)) {
      dependencies[packageName] = '^' + versionString;
    }
  }

  json.dependencies = dependencies;
  return json;
}

// Apply the given promise-returning function to each member of the array.
// Ensure each promise completes before starting the next one to avoid
// spinning up too many file operations at once. This is effectively like
// Promise.all(), while ensuring that the items are processed in a completely
// sequential order.
function mapAndChain(array, promiseFn) {
  // Start the promise chain with a resolved promise.
  return array.reduce((chain, item) => chain.then(() => promiseFn(item)), Promise.resolve());
}
