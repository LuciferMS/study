const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const topicSchema = new Schema({
    topicName     : String,                                //话题名
    description   : String,                                //话题描述
    owner         : String,                                //话题拥有者
    createDate    : {type : Date, default : Date.now},     //话题创建时间
    lastUpdate    : {type : Date, default : Date.now},     //最新一次更新时间
    startTime     : {type : Date, default : Date.now},     //话题开始时间
    endTime       : {type : Date, default : Date.now},     //话题结束时间
    deadline      : {type : Date, default : Date.now},     //拼团截至时间
    downNum       : Number,                                //人数下限
    upNum         : Number,                                //人数上限
    currentNum    : Number,                                //现有人数
})



const topic = mongoose.model('topic', topicSchema);

module.exports.topic = topic;