var gulp = require('gulp');

gulp.task('default', function() {
  var uglify = require('gulp-uglify');

  gulp.src('src/**/*.js')
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
  var
    babel = require('gulp-babel'),
    tape = require('gulp-tape');

  gulp.src('tests/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('tests/compiled'))
    .pipe(tape());
});
