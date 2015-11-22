'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var chalk = require('chalk');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var merge = require('utils-merge');
var duration = require('gulp-duration');

var config = {
	js: {
		src: './src/app.js',
		watch: './src/**/*.js',
		outputDir: './dist/',
		outputFile: 'bundle.js'
	}
};

function mapError (err) {
	if (err.fileName) {
		gutil.log(chalk.red(err.name)
			+ ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
			+ ': Line ' + chalk.magenta(err.lineNumber)
			+ ' & Column ' + chalk.magenta(err.columnNumber || err.column)
			+ ': ' + chalk.blue(err.description));
	} else {
		//browserify error
		gutil.log(chalk.red(err.name) + ': ' + chalk.yellow(err.message));
	}
}

function bundle (bundler) {
	var bundleTimer = duration('JS bundle time');

	bundler
		.bundle()
		.on('error', mapError)
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(rename(config.js.outputFile))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest(config.js.outputDir))
		.pipe(notify({
			message: 'Generated file <%= file.relative %>'
		}))
		.pipe(bundleTimer)
		.pipe(livereload());
}

gulp.task('default', function () {
	livereload.listen();

	var args = merge(watchify.args, {debug: true});

	var bundler = browserify(config.js.src, args)
		.plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
		.transform(babelify, {presets: ['es2015', 'react']});

	bundle(bundler);

	bundler.on('update', function  () {
		bundle(bundler);
	})
})