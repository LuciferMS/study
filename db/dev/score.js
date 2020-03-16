const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    userId         : String,                           //用户id
    username       : String,
    topicId        : String,                           // 话题id
    score          : Number,                           // 积分   
    lastUpdateTime : {type : Date, default : Date.now} //上一次更新时间
})

const score = mongoose.model('score', scoreSchema);

module.exports.score = score