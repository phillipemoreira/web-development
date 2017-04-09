var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var streamqueue = require('streamqueue');

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('bundle', ['clean'], function() {
    return streamqueue({objectMode: true}, 
            gulp.src('src/reducers.js'),
            gulp.src('src/presentational-components.js'),
            gulp.src('src/auxiliary-functions.js'),
            gulp.src('src/container-components.js'),
            gulp.src('src/app.js')
        )
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch(['src/*.*'], ['bundle']);
});

gulp.task('default', function (callback) {
    return runSequence('bundle', ['watch'], callback);
});
