var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

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

module.exports = mongoose.model('Code',CodeSchema);

