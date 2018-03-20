
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

//API
var APISchema = new Schema({
api_name: String
questions: [{type: ObjectId, ref:QuestionSchema}],
methods: [{type:ObjectId, ref:MethodSchema}]
});



// Questions
var QuestionSchema = new Schema({
question_id:String,
creation_date:Date,
extraction_date:Date,
body:String,
answers: [{type: ObjectId, ref:'AnswerSchema'}],
bugs: [{type: ObjectId, ref:'BugSchema'}],
title:String,
tags:[String],
author:String,
viewed: Number,
api_id: [{type:ObjectId, ref:APISchema}]

});

// Answers
var AnswerSchema = new Schema({
answer_id:String,
creation_date:Date,
extraction_date:Date,
body:String,
accepted: Boolean,
votes: Number,
question_id:{type:ObjectId, ref:QuestionSchema},
code:{type:ObjectId, ref:CodeSchema}
bug_fix:{type:ObjectId, ref:BugFixSchema}
api_recommendation:{type:ObjectID, ref:APIRecommendationSchema}
});

// Bug Fix
var BugFixSchema = new Schema({
description:String
});

var APIRecommendationSchema = new Schema({
description:String,
type:String
});

//Methods
var MethodSchema = new Schema({
name: String,
api_id:{type:ObjectId, ref:APISchema},
description: String,
code_example: [{type:ObjectId, ref:'CodeSchema'}],
//bugs : {type:ObjectId, ref:'BugSchema'},
});

// Code Examples
var CodeSchema = new Schema({
code_content: String,
answer_id:{type:ObjectId, ref:AnswerSchema},
description: String,
methods:[{type:ObjectId, ref:MethodSchema}],
programming_language:String
//code_example: {type:ObjectId, ref:'CodeSchema'},
//bugs : {type:ObjectId, ref:'BugSchema'},
});

//Bugs , Errors , Issues Schema

var BugsSchema = new Schema({
 bug_description: String,
 question: {type:ObjectId, ref:QuestionSchema}, 
});



module.exports = mongoose.model('Answer', AnswerSchema);
module.exports = mongoose.model('Question', QuestionSchema);
