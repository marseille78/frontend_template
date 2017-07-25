'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('sass', function() {
	return gulp.src('frontend/styles/**/*.scss', {base: 'frontend'})
		.pipe(gulpIf(isDevelopment, sourcemaps.init()))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(gulpIf(isDevelopment, sourcemaps.write()))
		.pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
	return del('public');
});

gulp.task('assets', function() {
	return gulp.src('frontend/assets/**/*.*')
		.pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('sass','assets'))
);