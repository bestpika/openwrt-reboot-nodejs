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
    response.write("Server Reboot!");
    console.log('Server Reboot!')
    exec('sync; reboot &');
    response.end();
    request.connection.destroy();
    process.exit();
});

server.listen(8888, '0.0.0.0', function() {
    console.log('Server On!');
});