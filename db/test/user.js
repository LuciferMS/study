const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',  { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
 }, function(error){
    if(error) console.error('something happen expectly during connecting!!!')
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.info('链接成功.....')
})

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : String,
    password : String,
    createTime : {type : Date, default : Date.now},
})

const user = mongoose.model('user', UserSchema)

// const Elliot = new user({username : 'Elliot', password : '123456'});
// const Shalay = new user({username : 'Shayla', password : '123456'});

// Elliot.save((error, Elliot) => {
//     if(error) console.error('something happen during saving Elliot')
//     console.info('save Elliot successfully!!!');
// })

// Shalay.save((error, Shalay) => {
//     if(error) console.error('something happen during saving Shalay')
//     console.info('save Shalay successfully!!!');
// })

user.findOne({'username' : 'Elliot'}, function(error, result){
    if(error) console.error(error);
    console.info(result)
})

const query = user.findOne().where('username').equals('Elliot');
query.exec(function(error, result){
    if(error) console.error(error);
    console.info(result)
})