const mongoose = require('mongoose')
const user = require('../dev/user.js').user

mongoose.connect('mongodb://localhost/test')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.info('链接成功.....')
})

const Elliot = new user({username : 'Elliot', password : '123456'})
const Shayla = new user({username : 'Shayla', password : '123456'})
const Neo    = new user({username : 'Neo'   , password : '123456'})
const Morfis = new user({username : 'Mofis' , password : '123456'})


console.info('starting init table user!!')

Elliot.save((error, Elliot) => {
    if(error) console.error(error);
    console.info('save Elliot successfully!!!!');
})

Shayla.save((error, Shayla) => {
    if(error) console.error(error);
    console.info('save Shayla successfully!!!!');
})

Neo.save((error, Elliot) => {
    if(error) console.error(error);
    console.info('save Neo successfully!!!!');
})

Morfis.save((error, Morfis) => {
    if(error) console.error(error);
    console.info('save Morfis successfully!!!!');
})
