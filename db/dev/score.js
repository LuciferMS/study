const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    userId : String,
    topicId : String,
    score  : Number,
    lastUpdateTime : {type : Date, default : Date.now}
})

const score = mongoose.model('score', scoreSchema);

module.exports.score = score