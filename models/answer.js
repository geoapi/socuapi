var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

// Answers
var AnswerSchema = new Schema({
accepted: Boolean,
votes: Number,
answer_id:String,
body_content:String,
creation_date:Date,
extraction_date:Date,
author:String,
question_id:{type:ObjectId, ref:'Question'},
code:{type:ObjectId, ref:'Code'},
bug:{type:ObjectId, ref:'Bug'},
bug_fix:{type:ObjectId, ref:'BugFix'},
api_recommendation:{type:ObjectId, ref:'APIRecommendation'}
});



module.exports = mongoose.model('Answer', AnswerSchema);
