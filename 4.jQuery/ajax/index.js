var express = require('express');
var app = express();

app.use(express.static(__dirname + "/client"));
app.listen(3000);

console.log("AJAX app running in port 3000.");