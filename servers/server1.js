/**
 * OpenCLassroom
 * First application, first example
 * minimal server
 */
var http = require('http');

var server = http.createServer(function(req, res) {

	/*
	 * The function passed as parameter is call when a client connect
	 * type requestListener in the documentation
	 * 
	 * What is great is that the official documentation does not describe requestListener ...
	 * req:  request information
	 * res: object to fill for the reply
	 */
	res.writeHead(200);
	res.end('Salut tout le monde !');
});

// http://localhost:9090/
server.listen(9090);
