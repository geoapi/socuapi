var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

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



module.exports = mongoose.model('Answer', AnswerSchema);

