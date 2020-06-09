var path = require('path');
var fs= require('fs');
var express = require('express');

var exphbs = require('express-handlebars');

var app = express();
var http = require("http");

app.engine('handlebars',exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




//This logger functionality automatically serves style and index.html
var logger = require('./logger');

app.use(logger);

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res, next){
  res.status(200).render('index');
});
app.get('/index.html', function(req, res, next){
  res.status(200).render('index');
});
app.get('/home',function(req, res, next){
  res.status(200).render('index');
});
app.get('/about',function(req, res, next){
  res.status(200).render('about');
});
app.get('/spells',function(req, res, next){
  res.status(200).render('spells');
});
app.get('/api/spells/:name',function(req, res, next){
  var name = req.params.name;
  res.status(200).render('spells');
});


app.get('*',function(req, res, next){
  res.status(200).render('404');
});

app.listen(3000, function(){
  console.log("The server is listening on port 3000");
});
