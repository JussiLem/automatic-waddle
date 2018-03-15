const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// Gulp dependencies go here
gulp.task('default', function () {
  // Gulp tasks go here
  // Run ESLint
  gulp.src("06_week/es6/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
  // Browser source
  gulp.src("06_week/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});