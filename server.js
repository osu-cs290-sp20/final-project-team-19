var path = require('path');
var fs= require('fs');
var express = require('express');
var bp = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
var http = require("http");

var characterData = require("./characterData");

app.use(bp.json());

app.engine('handlebars',exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');





//This logger functionality automatically serves style and index.html
var logger = require('./logger');

app.use(logger);

app.use(express.static(/*__dirname + */"public"));



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

app.get('/characters',function(req, res, next){
  res.status(200).render('characters');
});

app.post("/characters/newCharacter", function(req,res,next) {
  console.log("== req.body:", req.body);
  console.log("  -- req.body.url:", req.body.name);
  console.log("  -- req.body.caption:", req.body.dex);
  var test = req.body;

  characterData.characters.push({
    name: req.body.name,
    str: req.body.str,
    dex: req.body.dex,
    con: req.body.con,
    int: req.body.int,
    wis: req.body.wis,
    cha: req.body.cha,
    ac: req.body.ac,
    hp: req.body.hp,
    ms: req.body.ms
  });

  let data = JSON.stringify(test);
  fs.writeFileSync('characterData.json', data);

  res.status(200).send("Charcter done");

});

app.get('/:spellName',function(req, res, next){
  res.status(200).render('spellInfo');
});

app.get('*',function(req, res, next){
  res.status(200).render('404');
});

app.listen(3000, function(){
  console.log("The server is listening on port 3000");
});
