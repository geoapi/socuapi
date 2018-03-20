
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

//API
var APISchema = new Schema({
api_name: String
//questions: {type: ObjectId, ref:QuestionSchema},
//methods: {type:ObjectId, ref:MethodSchema}
});



// Questions
var QuestionSchema = new Schema({
question_id:String,
creation_date:Date,
extraction_date:Date,
body:String,
//answers: {type: ObjectId, ref:'AnswerSchema'}
title:String,
tags:[String],
author:String,
api_id: {type:ObjectId, ref:APISchema}

});

// Answers
var AnswerSchema = new Schema({
answer_id:String,
creation_date:Date,
extraction_date:Date,
body:String,
question_id:{type:ObjectId, ref:QuestionSchema}
});

//Methods
var MethodSchema = new Schema({
name: String,
api_id:{type:ObjectId, ref:APISchema},
description: String
//code_example: {type:ObjectId, ref:'CodeSchema'},
//bugs : {type:ObjectId, ref:'BugSchema'},
});

var CodeSchema = new Schema({
code_content: String,
answer_id:{type:ObjectId, ref:AnswerSchema},
description: String,
methods:[{type:ObjectId, ref:MethodSchema}],
programming_language:String
//code_example: {type:ObjectId, ref:'CodeSchema'},
//bugs : {type:ObjectId, ref:'BugSchema'},
});





module.exports = mongoose.model('Answer', AnswerSchema);
module.exports = mongoose.model('Question', QuestionSchema);
