var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

// Bug Fix
var BugFixSchema = new Schema({
bugfix_description:String,
answer: [ {type:ObjectId, ref:'Answer'}],
bug:  {type:ObjectId, ref:'Bug'}
});

module.exports = mongoose.model('BugFix', BugFixSchema);
