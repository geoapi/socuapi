var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

//Methods
var MethodSchema = new Schema({
method_name: String,
api_id:{type:ObjectId, ref:'API'},
method_description: String,
code_example: [{type:ObjectId, ref:'Code'}],
//bugs : {type:ObjectId, ref:'BugSchema'},
});

module.exports = mongoose.model('Method',MethodSchema);
