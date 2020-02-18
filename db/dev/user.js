const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const connect = require('../connect.js').connect;
connect();

const userSchema = new Schema({
    username        : String,                               //用户名
    password        : String,                               //密码
    createDate      : {type : Date, default : Date.now},    //创建日期
    lastLoginTime   : {type : Date, default : Date.now}     //最近一次登陆时间
})

const user = mongoose.model('user', userSchema);

module.exports.user = user;