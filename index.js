var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//require the mongo db schema for question
//var Question = require('./question');

var db = 'mongodb://localhost/socuapi';
mongoose.connect(db);

var Question = require('./models/question');
var Answer = require('./models/answer');
var APIRecommendation = require('./models/apirecommendation');
var Bug =require('./models/bug');
var Method =  require('./models/method');
var API =  require('./models/api');
var BugFix = require('./models/bugfix');
var Code = require('./models/code');




/**
// Requiring all models

var models_dir = __dirname + '/models'
fs.readdirSync(models_dir).forEach(function(model){
 if (model.substr(-3)=='.js'){
 require(models_dir+'/'+model);
 }
});
**/


app.get('/questions', function(req,res){
//res.send('ok');
Question.find({}).exec(function(err,questions){
     if (err) { throw err;}
     else {res.json(questions)};   
     }); 
});

app.get('/answers', function(req,res){
//res.send('ok');
Answer.find({}).exec(function(err,answers){
     if (err) { throw err;}
     else {res.json(answers)};
     });
});

app.get('/apirecommendation', function(req,res){
//res.send('ok');
APIRecommendation.find({}).exec(function(err,apire){
     if (err) { throw err;}
     else {res.json(apire)};
     });
});

app.get('/bugs', function(req,res){
//res.send('ok');
Bug.find({}).exec(function(err,bugs){
     if (err) { throw err;}
     else {res.json(bugs)};
     });
});


app.get('/methods', function(req,res){
//res.send('ok');
Method.find({}).exec(function(err,methods){
     if (err) { throw err;}
     else {res.json(methods)};
     });
});

app.get('/api', function(req,res){
//console.log('ididididididididiok');
API.find({}).exec(function(err,apir){
     if (err) { throw err;}
     else {res.json(apir)};
     });
});

app.get('/bugfixes', function(req,res){
//res.send('ok');
BugFix.find({}).exec(function(err,bugfix){
     if (err) { throw err;}
     else {res.json(bugfix)};
     });
});


app.get('/code', function(req,res){
//res.send('ok');
Code.find({}).exec(function(err,code){
     if (err) { throw err;}
     else {res.json(code)};
     });
});


// Now turning to posting data

app.post('/answer/:id', function(req, res) {
  
  var newAnswer = new Answer();
  newAnswer.answer_id = req.params.id;
  newAnswer.creation_date = Date.now(); 
  newAnswer.extraction_date = Date.now();
//  newAnswer.body = req.body.bc;
//  newAnswer.accepted = req.body.accepted;
//  newAnswer.votes = req.body.votes;
//  newAnswer.question_id = req.body.question_id;
 // newAnswer.code = req.body.code;
  //bug_fix and api_recommendation
   

  newAnswer.save(function(err, answer) {
    if(err) {
      res.send('error saving answer');
    } else {
      console.log(answer);
      res.send(answer);
    }
  });
});




// App listening to port 8080
app.listen(8080, function(){
console.log('app listening on port 8080');
});
