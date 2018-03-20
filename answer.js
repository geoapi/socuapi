
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var AnswerSchema = new Schema({
answer_id:String,
creation_date:Date,
extraction_date:Date,
body:String
});

module.exports = mongoose.model('Answer', AnswerSchema);
