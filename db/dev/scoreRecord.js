const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreRecordSchema = new Schema({
    userId : String,
    topicId : String,
    score  : Number,
    type : Number,
    createTime : {type : Date, default : Date.now}
})

const scoreRecord = mongoose.model('scoreRecord', scoreRecordSchema);

module.exports.scoreRecord = scoreRecord