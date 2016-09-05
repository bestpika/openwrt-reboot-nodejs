var express = require('express');
var app = express();
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
    response.end();
    // exec('sync; reboot &');
    process.exit();
});

app.listen(8888);