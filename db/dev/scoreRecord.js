const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreRecordSchema = new Schema({
    userId     : String,                            //用户id
    topicId    : String,                            //topicid
    score      : Number,                            //分数
    type       : Number,                            //积分类型
    createTime : {type : Date, default : Date.now}  //获得时间
})

const scoreRecord = mongoose.model('scoreRecord', scoreRecordSchema);

module.exports.scoreRecord = scoreRecord