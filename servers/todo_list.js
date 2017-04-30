/*
 * Open classroom
 * 
 * Todo list TP
 * 
 * http://localhost:9090/todo
 * 
 * Dependencies
 * 
 * In the project directory:
 * To install all dpendencies declared in the package.json file
 * npm install
 * 
 * Suggestions for improvement:
 *   * Modification des noms des tâches
 *   * Réagencement des tâches entre elles
 *   * Exportation CSV
 *   * Attribution d'une priorité et d'une date limite
 *   * Persistence de la todolist (stockage dans une base de données ou une base NoSQL)
 *   * Partage d'une todolist entre plusieurs personnes
 *   * Synchronisation de la todolist en temps réel entre les personnes sans avoir besoin de recharger la page
 */
var express = require('express');
var session = require('cookie-session')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))

/* S'il n'y a pas de todolist dans la session,

on en crée une vide sous forme d'array avant la suite */
.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    next();
})

.get('/todo', function(req, res) {
	res.render('todo.ejs', {todolist: req.session.todolist});
})

.post('/todo/add', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

.get('/todo/del/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }

    res.redirect('/todo');   
});


app.use(function(req, res, next){
    res.redirect('/todo');   
});

// http://localhost:9090/todo/
app.listen(9090);
