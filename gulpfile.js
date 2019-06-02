// 'use strict';
//
// var gulp = require('gulp'),
//     browserSync = require('browser-sync').create(),
//     sass = require('gulp-sass');
// sass.compiler = require('node-sass');
//
// // gulp.task('sass', function () {
// //   return gulp.src('assets/style/sass/**/*.scss')
// //     .pipe(sass.sync().on('error', sass.logError))
// //     .pipe(gulp.dest('assets/style/css'));
// // });
// //
// // gulp.task('sass:watch', function () {
// //   gulp.watch('assets/style/sass/**/*.scss', gulp.series('sass'));
// // });
//
// gulp.task('styles', function () {
//
//     gulp.src('assets/style/sass/**/*.scss')
//
//         .pipe(sass({includePaths: ['assets/style/sass']}).on('error', sass.logError))
//
//         .pipe(gulp.dest('assets/style/css'))
//
//         //-----*****   RELOADING of CSS   *****-----
//         .pipe(browserSync.reload({ stream: true }))
// });
// gulp.task('default', function () {
//
//     // Serve files from the root of this project
//     browserSync.init({
//         watch: true,
//         server: "./"
//     });
//
//     gulp.watch('assets/style/sass/**/*.scss', gulp.series('styles', browserSync.reload));
//
//     //-----*****   RELOADING of HTML   *****-----
//     gulp.watch("*.html").on("change", browserSync.reload);
//
// });
//
//
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat-css');
const browserSync = require('browser-sync').create();

function runSass() {
  return gulp
    .src('assets/style/sass/**/*.scss')
    .pipe(sass())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('assets/style/css'))
    .pipe(browserSync.stream());
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('assets/style/sass/**/*.scss', runSass);
  gulp.watch('*.html', reload);
  // gulp.watch('*.js', reload);
}

exports.sass = runSass;
exports.watch = watch;
