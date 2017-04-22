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
	  	fs.readFile('hello2.html', function (err,data) {
	  		res.end(data);
	  	});
	  	
	  }
	}
).listen(9090)
