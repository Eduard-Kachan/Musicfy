
// ------------------------------------
// Libraries
// ------------------------------------

var fs        = require('fs');
var gulp      = require('gulp');
var stylus    = require('gulp-stylus');
var jade      = require('gulp-jade');

// ------------------------------------
// Paths
// ------------------------------------

var paths     = {
  styles      : './src/assets/styles/**/*.styl',
  scripts     : './src/assets/scripts/**/*.js',
  //images      : './src/assets/images/**/*.{png,gif,jpeg,jpg}',
  templates   : './src/**/*.jade'
};

// ------------------------------------
// Default Task
// ------------------------------------

gulp.task('default', ['scripts', 'styles', 'templates']);

// ------------------------------------
// Watch Task
// ------------------------------------

gulp.task('watch', function() {

  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.scripts, ['scripts']);
  //gulp.watch(paths.images, ['images']);
  gulp.watch(paths.templates, ['templates']);

});

// ------------------------------------
// Styles Task
// ------------------------------------

gulp.task('styles', function() {

  gulp.src('./src/assets/styles/styles.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./public/assets/styles/'))

});

// ------------------------------------
// Scripts Task
// ------------------------------------

gulp.task('scripts', function() {

  gulp.src(paths.scripts)
    .pipe(gulp.dest('./public/assets/scripts/'))

});

// ------------------------------------
// Templates Task
// ------------------------------------

gulp.task('templates', function() {

  gulp.src(paths.templates)
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('./public/'))

});


