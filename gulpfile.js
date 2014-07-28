/**
 * Created by storskel on 28.07.2014.
 */
// include gulp
var gulp = require('gulp');

// include plug-ins
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var ngMin = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var paths = {
    scripts: ['./app.js','./controllers/**/*.js','./services/*.js','./directives/*.js']
};

// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', function() {
    var jsPath = {jsSrc:paths.scripts, jsDest:'./appbuild'};
    gulp.src(jsPath.jsSrc)
        .pipe(concat('turplanlegger.js'))
        .pipe(stripDebug())
        .pipe(ngMin())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsPath.jsDest));
});

gulp.task('default', function () {
    gulp.watch(paths.scripts, ['bundle-scripts']);
});