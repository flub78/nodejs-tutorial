/*
 * Hello name, name got from a form
 * http://localhost:9090
 */
var http = require('http');
var url = require('url');
var fs = require('fs');


varserver = http.createServer(
	function (req, res) {
	  var url_parts = url.parse(req.url, true);
	  
	  var name = url_parts.query.name;
	  
	  if (name) {
	  	console.log('Name: ' + name);
	  	res.writeHead(200, {'Content-Type': 'application/json'});
	  	res.end(JSON.stringify({message: 'Hello ' + name + '!'}));
	  } else {
	    console.log('Noname!');
	  	res.writeHead(200, {'Content-Type': 'text/html'});
	  	// root of the file system is the nodejs project. Not the javascript file location.
	  	fs.readFile('html/hello2.html', function (err,data) {
	  		res.end(data);
	  	});
	  	
	  }
	}
).listen(9090)
