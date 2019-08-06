

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('compilar-scripts',function(){
    return gulp.src('js/*.js')  
        .pipe(concat('scripts.js')) 
        .pipe(uglify()) 
        .pipe(gulp.dest('minify')) 
})

gulp.task('compilar-css',function(){
    return gulp.src('css/*.css')  
        .pipe(concat('main.css')) 
        .pipe(gulp.dest('minify-css')) 
})
