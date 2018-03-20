var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//require the mongo db schema for question
var Question = require('./question');

var db = 'mongodb://localhost/socuapi';
mongoose.connect(db);


var a = {a:'aaa',b:'bbbb'};

app.get('/questions', function(req,res){
//res.send('ok');
Question.find({}).exec(function(err,questions){
     if (err) { throw err;}
     else {res.json(questions)};   
     }); 
});


// App listening to port 8080
app.listen(8080, function(){
console.log('app listening on port 8080');
});
