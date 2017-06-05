//assign gulp and gulp-util to variables:

var gulp = require('gulp'),
    gutil = require('gulp-util');

gulp.task('log', function() {
  gutil.log('Workflows are awesome!');
});
