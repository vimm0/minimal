'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');
sass.compiler = require('node-sass');

// gulp.task('sass', function () {
//     return gulp.src('assets/style/sass/**/*.scss')
//         .pipe(sass.sync().on('error', sass.logError))
//         .pipe(gulp.dest('assets/style/css'))
//         .pipe(browserSync.stream());
// });
//
// // gulp.task('sass:watch', function () {
// //     gulp.watch('assets/style/sass/**/*.scss', gulp.series('sass'));
// // });
// gulp.task('serve', gulp.series('sass'), function () {
//
//     browserSync.init({
//         server: {
//             baseDir: "./",
//             injectChanges: true // this is new
//         }
//     });
//
//     gulp.watch('assets/style/sass/**/*.scss', gulp.series('sass'));
//     gulp.watch("index.html").on('change', browserSync.reload);
// });
// gulp.task('default', gulp.series('serve'));
gulp.task('styles', function () {

    gulp.src('assets/style/sass/**/*.scss')

        .pipe(sass().on('error', sass.logError))

        .pipe(gulp.dest('assets/style/css'))

        //-----*****   RELOADING of CSS   *****-----
        .pipe(browserSync.stream());
});
gulp.task('default', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: "./"
    });

    gulp.watch('assets/style/sass/**/*.scss', gulp.series('styles'));

    //-----*****   RELOADING of HTML   *****-----
    gulp.watch("*.html").on("change", browserSync.reload);

});


