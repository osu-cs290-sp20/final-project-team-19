var express = require('express');
var app = express();

app.get('/', function(req, res, next){
res.status(200).sendFile(__dirname + "")


});

app.listen(8000, function(){
console.log("The server is listening on port 8000");
});
