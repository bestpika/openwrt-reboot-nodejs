var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var exec = require("child_process").exec;

app.get('/', function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("Server On!");
    response.end();
});

app.get('/reboot', function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    console.log('Server Reboot!');
    response.write("Server Reboot!");
    response.end();
    exec('sync; reboot &');
    process.exit();
});

server.listen(8888, '0.0.0.0', function() {
    console.log('Server On!');
});