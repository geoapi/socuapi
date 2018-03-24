var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

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
api: [{type:ObjectId, ref:'API'}]
//maybe add editor who update on contenet if needed?
});
module.exports = mongoose.model('Question', QuestionSchema);
