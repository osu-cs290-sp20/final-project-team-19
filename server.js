var express = require('express');
var app = express();

//This logger functionality automatically serves style and index.html
var logger = require('./logger');

app.use(logger);

app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res, next){
  res.status(200).sendFile(__dirname + "/public/index.html");
});
app.get('/home',function(req, res, next){
  res.status(200).sendFile(__dirname + "/public/index.html");
});
app.get('/about',function(req, res, next){
  res.status(200).sendFile(__dirname + "/public/about.html");
});

app.get('*',function(req, res, next){
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(3000, function(){
  console.log("The server is listening on port 3000");
});
