var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

// Bug Fix
var BugFixSchema = new Schema({
description:String
});

module.exports = mongoose.model('BugFix', BugFixSchema);

