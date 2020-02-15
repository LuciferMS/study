const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    createDate: {type : Date, default : Date.now},
})

const user = mongoose.model('user', userSchema);

module.exports.user = user;