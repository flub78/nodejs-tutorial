/*
 * A server of static HTML pages
 * 
 * http://localhost:9090/hello3.html
 * http://localhost:9090/section/page.html
 * 
 * http://localhost:9090/Bootstrap_Template.html#
 */
var express = require('express');
var app = express();

app.use(express.static('html'))

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(9090);
