var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
	return gulp.src('dist/')
		.pipe(clean());
});

gulp.task('jshint', function() {
	return gulp.src('client/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
	return es.merge([
			gulp.src('bower_components/jquery/dist/jquery.min.js'),
			gulp.src('client/js/*.js').pipe(uglify())])
		.pipe(concat('scripts.min.js'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('htmlmin', function() {
	return gulp.src('client/html/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist/html/'));
});

gulp.task('cssmin', function() {
	return gulp.src('client/css/*.css')
		.pipe(cleanCSS())
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('dist/'));
});

gulp.task('copy', function() {
	return gulp.src('client/index.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', function (callback) {
	return runSequence('clean',
		['jshint', 'uglify', 'htmlmin', 'cssmin', 'copy'], callback);
});
