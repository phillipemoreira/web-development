var express = require('express');
var path = require('path');
var gulpTasks = require('./gulpfile.js');
var gulp = require('gulp');

var app = express();

app.use(express.static(path.join(__dirname + "/dist")));
app.listen(3000);

console.log("BOOTSTRAP app running in port 3000.");

//gulp.start('watch');

module.exports = app;