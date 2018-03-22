var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.Types.ObjectId;

var APIRecommendationSchema = new Schema({
apirecommendation_description:String,
apirecommendation_type:String
});

module.exports = mongoose.model('APIRecommendation',APIRecommendationSchema);
