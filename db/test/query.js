const topic = require('../dev/topic.js').topic

const connnect = require('../connect.js').connect
connnect();

const query = topic.find();
query.exec((error, topics) => {
    if(error) console.error(error)
    topics.forEach((element) => {
        console.info(element)
    })
})