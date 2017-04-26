/*
 * Open Classroom
 * Events
 * Using an HTTP server to demonstrate event handlers
 */
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})

//http://localhost:9090/
server.listen(9090); // Démarre le serveur

server.close(); // Arrête le serveur. Déclenche l'évènement close


