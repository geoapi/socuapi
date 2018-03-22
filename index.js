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



//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


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
//Posting an API
app.post('/api/', function(req, res) {
  var newAPI = new API({
    api_name:req.body.api_name
  });
// TODO link related questions and related API methods
  newAPI.save(function(err, APIanswer) {
    if(err) {
      res.send('error saving API ');
      console.log(err)
    } else {
      console.log(APIanswer);
      res.send(APIanswer);
    }
  });
});

//Posting a method
app.post('/method/', function(req, res) {
  var newMethod = new Method({
    method_name: req.body.method_name,
    method_description: req.body.method_description
  });
// TODO link related questions and related API methods
  newMethod.save(function(err, Methodanswer) {
    if(err) {
      res.send('error saving method to API ');
      console.log(err)
    } else {
      console.log(Methodanswer);
      res.send(Methodanswer);
    }
  });
});


app.post('/bug/', function(req, res) {
  var newBug = new Bug({
  bug_description: req.body.bug_description
  });
// TODO link related questions and related API methods
  newBug.save(function(err, Buganswer) {
    if(err) {
      res.send('error saving bug to the API');
      console.log(err)
    } else {
      console.log(Buganswer);
      res.send(Buganswer);
    }
  });
});


app.post('/answer/:id', function(req, res) {
console.log(req.body);
  var newAnswer = new Answer({
    answer_id:req.params.id,
    creation_date:Date.now(),
    extraction_date:Date.now(),
    body_content:req.body.body_content,
    accepted:req.body.accepted,
    votes: req.body.votes
  });
//question_id relation TODO;
//TODO bug_fix and api_recommendation
  newAnswer.save(function(err, answer) {
    if(err) {
      res.send('error saving answer');
    } else {
      console.log(answer);
      res.send(answer);
    }
  });
});


app.post('/code/', function(req, res) {
  var newCode = new Code({
  code_content:req.body.code_content,
  code_description: req.body.code_description,
  programming_language: req.body.programming_language
  });
// TODO link related questions and related API methods
  newCode.save(function(err, Codeanswer) {
    if(err) {
      res.send('error saving code to the API');
      console.log(err)
    } else {
      console.log(Codeanswer);
      res.send(Codeanswer);
    }
  });
});

app.post('/bugfix/', function(req, res) {
  var newBugFix = new BugFix({
  bugfix_description: req.body.bugfix_description
  });
// TODO link related questions and related API methods
  newBugFix.save(function(err, BugFixanswer) {
    if(err) {
      res.send('error saving Bug Fix to the API');
      console.log(err)
    } else {
      console.log(BugFixanswer);
      res.send(BugFixanswer);
    }
  });
});

app.post('/apirecommendation/', function(req, res) {
  var newAPIRecommendation = new APIRecommendation({
  apirecommendation_description:req.body.apirecommendation_description,
  apirecommendation_type: req.body.apirecommendation_type
  });
// TODO link related questions and related API methods
  newAPIRecommendation.save(function(err, newAPIRanswer) {
    if(err) {
      res.send('error saving Recommendatio to the API');
      console.log(err)
    } else {
      console.log(newAPIRanswer);
      res.send(newAPIRanswer);
    }
  });
});



// App listening to port 8080
app.listen(8080, function(){
console.log('app listening on port 8080');
});
