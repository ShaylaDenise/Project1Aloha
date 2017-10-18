var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
  console.log("im working")
});
var concat = require('gulp-concat');

gulp.task('styles', function() {
 return gulp.src('./html.html/src/css/*.css')
   .pipe(concat('styles.css'))
   .pipe(gulp.dest('./html.html/dist/css/'));
});
gulp.task('watch', function() {
  gulp.watch('./src/css//*.css', ['styles']);
});
gulp.task('reload',function(){
  browserSync.reload();
})
gulp.task('scripts', function() {
  return gulp.src('./html.html/src/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./html.html/dist/js/'));
 });
 gulp.task('watch', function() {
   gulp.watch('./src/js//*.js', ['scripts']);
 });
 var gulp        = require('gulp');
 var browserSync = require('browser-sync').create();
 
 // Static server
 gulp.task('browser-sync', function() {
     browserSync.init({
         server: {
             baseDir: "./html.html/"
         }
     });
 });
 