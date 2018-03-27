var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

//API
var APISchema = new Schema({
api_name: String,
api_version:String,
api_description:String,
api_uri:String,
questions: [{type: ObjectId, ref:'Question'}],
methods: [{type:ObjectId, ref:'Method'}]
});

module.exports = mongoose.model('API', APISchema);
