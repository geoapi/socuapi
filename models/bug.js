var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

//Bugs , Errors , Issues Schema
var BugsSchema = new Schema({
 bug_description: String,
 question: {type:ObjectId, ref:'Question'},
});

module.exports = mongoose.model('Bug', BugsSchema);

