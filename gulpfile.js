var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    // folders
    folder = {
        sass: 'sass/',
        css: 'css/'
    };

/**
 * Sass task 
 */
gulp.task('sass', function() {
    return gulp
        .src(folder.sass + '*.scss')
        .pipe(plumber({
            errorHandler: function(err) {
            // display the error message
            console.log(err);
            // end the errored task
            this.emit('end') }
        }))
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(gulp.dest(folder.css));
});

/**
 * Watch the scss files for changes
 */
gulp.task('default', ['sass'], function() {
    gulp.watch(folder.sass + '**/*.scss',{cwd:'./'}, ['sass']);
});
