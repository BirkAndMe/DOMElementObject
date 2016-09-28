var gulp = require('gulp');

gulp.task('default', function() {
  var
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

  gulp.src('ElementObject.js')
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename('ElementObject.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('test', function() {
  var
    babel = require('gulp-babel'),
    tape = require('gulp-tape'),
    rename = require('gulp-rename');

  gulp.src('tests/ElementObject.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(rename('ElementObject.compiled.js'))
    .pipe(gulp.dest('tests/'))
    .pipe(tape());
});
