var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

//API
var APISchema = new Schema({
_id:ObjectId,
api_name: String,
questions: [{type: ObjectId, ref:'Question'}],
methods: [{type:ObjectId, ref:'Method'}]
});

module.exports = mongoose.model('API', APISchema);

