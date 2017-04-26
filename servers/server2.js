/**
 * OpenCLassroom
 * First application, second example
 * Simple server generating HTML
 */
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end('<p>Voici un paragraphe <strong>HTML</strong> !</p>');
});

//http://localhost:9090/
server.listen(9090);

