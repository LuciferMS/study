const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userTopicRefSchema = new Schema({
    userId : String,
    topicId : String,
    createTime : {type : Date, default : Date.now}
})


const userTopicRef = mongoose.model('userTopicRef', userTopicRefSchema);

module.exports.userTopicRef = userTopicRef