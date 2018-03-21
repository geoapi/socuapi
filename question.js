
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

//API
var APISchema = new Schema({
_id:ObjectId,
api_name: String,
questions: [{type: ObjectId, ref:'Question'}],
methods: [{type:ObjectId, ref:'Method'}]
});



// Questions
var QuestionSchema = new Schema({
question_id:String,
creation_date:Date,
extraction_date:Date,
body:String,
answers: [{type: ObjectId, ref:'Answer'}],
bugs: [{type: ObjectId, ref:'Bug'}],
title:String,
tags:[String],
author:String,
viewed: Number,
api_id: [{type:ObjectId, ref:'API'}]

});

// Answers
var AnswerSchema = new Schema({
answer_id:String,
creation_date:Date,
extraction_date:Date,
body:String,
accepted: Boolean,
votes: Number,
question_id:{type:ObjectId, ref:'Question'},
code:{type:ObjectId, ref:'Code'},
bug_fix:{type:ObjectId, ref:'BugFix'},
api_recommendation:{type:ObjectId, ref:'APIRecommendation'}
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
api_id:{type:ObjectId, ref:'API'},
description: String,
code_example: [{type:ObjectId, ref:'Code'}],
//bugs : {type:ObjectId, ref:'BugSchema'},
});

// Code Examples
var CodeSchema = new Schema({
code_content: String,
answer_id:{type:ObjectId, ref:'Answer'},
description: String,
methods:[{type:ObjectId, ref:'Method'}],
programming_language:String
//code_example: {type:ObjectId, ref:'CodeSchema'},
//bugs : {type:ObjectId, ref:'BugSchema'},
});

//Bugs , Errors , Issues Schema

var BugsSchema = new Schema({
 bug_description: String,
 question: {type:ObjectId, ref:'Question'}, 
});



module.exports = mongoose.model('Answer', AnswerSchema);
module.exports = mongoose.model('Question', QuestionSchema);
module.exports = mongoose.model('API', APISchema);
module.exports = mongoose.model('BugFix', BugFixSchema);
module.exports = mongoose.model('Bug', BugsSchema);
module.exports = mongoose.model('APIRecommendation',APIRecommendationSchema);
module.exports = mongoose.model('Method',MethodSchema);
module.exports = mongoose.model('Code',CodeSchema);

