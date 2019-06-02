'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('assets/style/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/style/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('assets/style/sass/**/*.scss', gulp.series('sass'));
});
