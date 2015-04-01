var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('sass', function (cb) {
  gulp.src('./src/wing.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'));
  cb();
});

gulp.task('watch', ['sass'], function() {
  gulp.watch('src/**/*', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['watch']);

