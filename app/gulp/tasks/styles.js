var gulp = require('gulp'),
autoprefixer = require ('autoprefixer'),
nested= require('postcss-nested'),
cssvars= require('postcss-simple-vars'),
cssImport = require('postcss-import'),
postcss = require('gulp-postcss');


gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nested,autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

});