var gulp = require('gulp');
var babel = require('gulp-babel');
var umd = require('gulp-umd');

var paths = {
  src: 'src/**/*.js',
  dest: 'dist',
  test: 'test/**/*.js'
};

gulp.task('watch', function() {
  return gulp.watch(paths.src, ['build']);
});

gulp.task('build', function () {
  return gulp.src(paths.src)
    .pipe(babel())
    .pipe(umd())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('dev', gulp.series(['watch', 'build']));
