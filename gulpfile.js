var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', ['sass'], () => {
    gulp.watch("src/**/*.scss", ['sass']);      
});
