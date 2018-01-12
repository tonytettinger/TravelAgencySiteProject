var gulp = require('gulp'),
autoprefixer = require ('autoprefixer'),
nested= require('postcss-nested'),
cssvars= require('postcss-simple-vars'),
cssImport = require('postcss-import'),
postcss = require('gulp-postcss'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nested,autoprefixer]))
        .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});