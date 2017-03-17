var express = require('express');
var path = require('path');

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

var port = normalizePort(process.env.PORT || '4000');
app.listen(port)

console.log("BOOTSTRAP app running in port " + port);

module.exports = app;