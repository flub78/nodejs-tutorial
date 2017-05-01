/**
 * OpenCLassroom
 * Socket.io example
 * 
 * Some communication between clients and server using socketio
 * 
 *  TODO: session management to recognize the client:
 *  https://www.npmjs.com/package/session.socket.io 
 */

var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('html/socketio.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});


// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
	socket.emit('message', 'Welcome on this socketio server !');
	socket.broadcast.emit('message', 'Un autre client vient de se connecter !');
    console.log('Un client est connecté !');
    
    // Quand le serveur reçoit un signal de type "message" du client    
    socket.on('message', function (message) {
        console.log('Un client me parle ! Il me dit : ' + message);
    });
    
});

// http://localhost:9090/
server.listen(9090);
