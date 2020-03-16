const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://localhost/test',  { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function(error){
        if(error) console.error('something happen expectly during connecting!!!')
    })

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
        console.info('mongoose log : 链接成功.....')
    })
}


module.exports.connect = connect