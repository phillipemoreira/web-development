var express = require('express');
var app = express();
var gulpTasks = require('./gulpfile.js');

app.use(express.static(__dirname + "/dist"));
app.listen(3000);

console.log("AJAX app running in port 3000.");