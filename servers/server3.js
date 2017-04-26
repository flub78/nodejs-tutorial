/*
 * Open Classroom
 * First application, example 4
 * Getting an URL requet
 */
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    // console.log(req);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Bien le bonjour');
    res.end();
});

// http://localhost:9090/
// try it also with:
// http://localhost:9090/testpage
// http://localhost:9090/favicon.ico
// http://localhost:9090/a/big/path

server.listen(9090);

