const gulp = require('gulp'); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require('gulp-terser'),
  rename = require('gulp-rename');

const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');

const sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  prettyError = require('gulp-prettyerror');



gulp.task('scripts', function () {
  return gulp
    .src('./js/*.js') // What files do we want gulp to consume?
    .pipe(terser()) // Call the terser function on these files
    .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
    .pipe(gulp.dest('./build/js'))
});

gulp.task('sass', function () {
  return gulp
    .src('./sass/styles.scss')
    .pipe(prettyError())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
  gulp.watch('./js/*.js', gulp.series('lint', 'scripts', 'reload'));
  gulp.watch('./*.html', gulp.series('reload'));
  gulp.watch('./sass/*.scss', gulp.series('sass', 'reload'));

  // watch sass files. if there are changes run the styles task
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('lint', function () {
  return gulp
    .src('./js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

// first run the scripts and the styles task. then watch for changes
gulp.task('default', gulp.parallel('scripts', 'sass', 'watch', 'browser-sync'));
