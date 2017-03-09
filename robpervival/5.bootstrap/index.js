var express = require('express');
var path = require('path');
var gulpTasks = require('./gulpfile.js');
var gulp = require('gulp');

function normalizePort(val){
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

var app = express();

app.use(express.static(path.join(__dirname + "/dist")));

var port = normalizePort(process.env.PORT || '3000');
app.listen(3000);

console.log("BOOTSTRAP app running in port 3000.");

//gulp.start('watch');

module.exports = app;