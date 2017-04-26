/*
 * Open classroom
 * 
 * Todo list TP
 * 
 * http://localhost:9090/todo
 * http://localhost:9090/todo/add
 * http://localhost:9090/todo/del/100
 * 
 * Dependencies
 * 
 * In the project directory:
 * npm install express
 * npm install ejs  (or is it included in express?)
 * npm install cookie-session
 */
var express = require('express');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')

var app = express();

app.get('/todo', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('List the todo list');
});

app.post('/todo/add', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Add a new element inthe todo list');
});

app.get('/todo/del/:id', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Delete an element from the todo list');
});


app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(9090);
