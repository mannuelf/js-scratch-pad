var browserSync = require('browser-sync').create();
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var sass = require('gulp-sass');
var reload = browserSync.reload;

gulp.task('eslint', function() {
  return gulp.src(['./**/*.js'])
  .pipe(eslint())
  .pipe(eslint.result(function(result) {
    console.log('ESLint result: ' + result.filPath);
    console.log('# Message: ' + result.messages.length);
    console.log('# Warning: ' + result.warningCount);
    console.log('# Errors: ' + result.errorCount);
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('lint', function() {
  gulp.watch(['./**/*.js'], ['lint']);
});

// Static Server + watching scss/html files
gulp.task('default', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("app/sass/*.scss", ['sass']);
  gulp.watch("./*/**/*.html").on('change', reload);
  gulp.watch("./*/**/*.js").on('change', reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(reload({stream: true}));
});
