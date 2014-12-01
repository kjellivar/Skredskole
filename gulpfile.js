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
var gutil = require('gulp-util');
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-htmlmin');

var paths = {
    scripts: ['./app.js','./controllers/**/*.js','./services/*.js','./directives/*.js', './partials/templates.js'],
    partials: ['./partials/**/*.html']
};

gulp.task('bundle-templates', function() {
    gulp.src(paths.partials)
        .pipe(minifyHTML({collapseWhitespace: true, keepClosingSlash:true}))
        .pipe(templateCache('templates.js', {root:'partials',module:'skredskoleAngularApp'}))
        .pipe(gulp.dest('partials'));
});

// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', function() {
    var jsPath = {jsSrc:paths.scripts, jsDest:'./appbuild'};
    gulp.src(jsPath.jsSrc)
        .pipe(concat('turplanlegger.js'))
        .pipe(stripDebug())
        .pipe(ngMin())
        //.pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsPath.jsDest))
        .on('error', gutil.log);
});

gulp.task('default', ['bundle-templates','bundle-scripts'], function () {
    gulp.watch(paths.partials, ['bundle-templates']);
    gulp.watch(paths.scripts, ['bundle-scripts']);
});