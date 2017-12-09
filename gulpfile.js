var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', ['sass'], () => {
    gulp.watch("src/sass/*.scss", ['sass']);      
});
