const topic = require('../dev/topic.js').topic
const user = require('../dev/user.js').user

const connnect = require('../connect.js').connect
connnect();

const query = topic.find();
query.exec((error, topics) => {
    if(error) console.error(error)
    topics.forEach((element) => {
        console.info(element)
    })
})

// user.findOne({username: 'Elliot'}, (error, result) => {
//     return result;
// }).then((data) => {
//     console.info(data);
// })