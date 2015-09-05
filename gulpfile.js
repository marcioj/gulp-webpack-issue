var gulp = require('gulp');
var del = require('del');
var webpack = require('gulp-webpack');
var preprocess = require('gulp-preprocess');

var preprocessOptions = {
  context: { CONFIG: JSON.stringify({ foo: 'bar' }) }
};

gulp.task('clean', function() {
  return del('./dist');
});

gulp.task('default', ['clean'], function() {
  return gulp.src('./src/*.js')
    .pipe(preprocess(preprocessOptions))
    .pipe(webpack({
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel' }
        ]
      },
      output: {
        filename: 'output.js'
      }
    }))
    .pipe(gulp.dest('./dist'));
});
