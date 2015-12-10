var gulp      = require('gulp');
var sass      = require('gulp-sass');
var rename    = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
// var webserver = require('gulp-webserver');

var paths = {
  sass: ['./css/style.scss']
};

gulp.task('default', ['watchSass']);

gulp.task('sass', function(done) {
  gulp.src('./css/style.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('watchSass', function() {
  gulp.watch(paths.sass, ['sass']);
});
