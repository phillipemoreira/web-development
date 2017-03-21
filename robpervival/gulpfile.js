var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var streamqueue = require('streamqueue');

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('jshint', function() {
    return streamqueue({objectMode: true},
            gulp.src('4.jQuery/js/*.js'),
            gulp.src('5.bootstrap/js/*.js')
        )
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
    return streamqueue({objectMode: true}, 
            gulp.src('bower_components/jquery/dist/jquery.min.js'),
            gulp.src('bower_components/jquery-ui/jquery-ui.min.js'),
            gulp.src('3.javascript/**/*.js').pipe(uglify()),
            gulp.src('4.jQuery/js/*.js').pipe(uglify()),
            gulp.src('5.bootstrap/js/*.js').pipe(uglify())
        )
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('dist/'));
});


gulp.task('htmlmin', function() {
    return gulp.src([
            '1.html/*.html',
            '2.css/*.html',
            '3.javascript/*.html',
            '3.javascript/reaction-test/*.html',
            '4.jQuery/html/*.html',
            '5.bootstrap/html/*.html'
        ])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/html/'));
});

gulp.task('cssmin', function() {
    return streamqueue({objectMode: true}, 
            gulp.src('bower_components/jquery-ui/themes/base/jquery-ui.min.css'),
            gulp.src('bower_components/jquery-ui/themes/smoothness/jquery-ui.min.css'),
            gulp.src('client/styles.css').pipe(cleanCSS()),
            gulp.src('2.css/*.css').pipe(cleanCSS()),
            gulp.src('3.javascript/**/*.css').pipe(cleanCSS()),
            gulp.src('4.jQuery/css/*.css').pipe(cleanCSS()),
            gulp.src('5.bootstrap/css/*.css').pipe(cleanCSS())
        )
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
    return gulp.src([
            'bower_components/jquery-ui/themes/base/images/*.png',
            'bower_components/jquery-ui/themes/smoothness/images/*.png',
            '1.html/images/*.png',
            '2.css/images/*.png',
            '4.jQuery/images/*.png',
            '5.bootstrap/images/*.png'
        ]).pipe(gulp.dest('dist/images/'));
});

gulp.task('sound', function() {
    return gulp.src([
            '3.javascript/reaction-test/resources/*.mp3'
        ])
        .pipe(gulp.dest('dist/'));
});

gulp.task('bootstrap', function() {
    return gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('dist/'));
});

gulp.task('bootstrap-css', function() {
    return gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('dist/'));
});

gulp.task('index', function() {
    return gulp.src('client/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch([
        'client/**/*.*',
        '1.html/**/*.*',
        '2.css/**/*.*',
        '3.javascript/**/*.*',
        '4.jQuery/**/*.*',
        '5.bootstrap/**/*.*'], ['prod']);
});

gulp.task('prod', ['jshint'],  function (callback) {
    return runSequence('clean',
        ['uglify', 'htmlmin', 'cssmin', 'bootstrap', 'bootstrap-css' , 'index', 'images', 'sound'], callback);
});

gulp.task('default', function (callback) {
    return runSequence('prod', ['watch'], callback);
});
