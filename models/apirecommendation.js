var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

var APIRecommendationSchema = new Schema({
description:String,
type:String
});

module.exports = mongoose.model('APIRecommendation',APIRecommendationSchema);

