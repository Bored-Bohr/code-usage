'use strict';
var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
	return gulp.src(['bin/**/*', 'public/javascripts/**/*', '*.js', 'routes/**/*.js'])
			.pipe(eslint())
			.pipe(eslint.format());
});

gulp.task('default', ['lint']);