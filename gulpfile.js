/*jslint node: true */
'use strict';

const gulp = require('gulp');

const webpackTask = require('./gulp/tasks/webpack').webpackTask;
const testWebpackTask = require('./gulp/tasks/webpack').testWebpackTask;
const watchifyTask = require('./gulp/tasks/webpack').watchifyTask;
const browserifyTask = require('./gulp/tasks/browserify').browserifyTask;
//const watchifyTask = require('./gulp/tasks/browserify').watchifyTask;
const docsTask = require('./gulp/tasks/docs');
const helpTask = require('./gulp/tasks/help');
const lintTask = require('./gulp/tasks/lint');

//
// Naming convention for tasks:
// taskName[-taskDependency[-taskDependency-[...]]]
//
// Example:
// lint: Simply runs the lint task
// lint-browserify: Runs the lint task with a dependency on browserify
// lint-docs-browserify: Runs the lint taks with a dependency first on docs,
//    then browserify
//

// Private
gulp.task('webpack', [], webpackTask);
gulp.task('testWebpack', [], testWebpackTask);
gulp.task('browserify', [], browserifyTask);
gulp.task('docs-browserify', ['browserify'], docsTask);
gulp.task('docs-webpack', ['webpack'], docsTask);
gulp.task('help', [], helpTask);
gulp.task('lint-docs-browserify', ['docs-browserify'], lintTask);
gulp.task('lint-docs-webpack', ['docs-webpack'], lintTask);
gulp.task('lint-browserify', ['browserify'], lintTask);
gulp.task('lint-webpack', ['webpack'], lintTask);
gulp.task('lint-testWebpack', ['testWebpack'], lintTask);

// Public
//gulp.task('build', ['browserify', 'docs-browserify', 'lint-docs-browserify']);
//gulp.task('devbuild', ['browserify', 'lint-browserify']);
gulp.task('build', ['webpack', 'docs-webpack', 'lint-docs-webpack']);
gulp.task('devbuild', ['testWebpack', 'lint-testWebpack']);
gulp.task('default', ['help']);
gulp.task('docs', [], docsTask);
gulp.task('lint', [], lintTask);
gulp.task('watch', [], watchifyTask);
