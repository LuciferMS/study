const topicModel = require('../dev/topic.js').topic

const connect = require('../connect.js').connect;
connect();

const math = {
    topicName : 'math',
    description : '最有趣的学科',
    owner: '王军',
    startTime: new Date(),
    endTime : new Date(),
    deadline : new Date(),
    downNum: 4,
    upNum: 10,
    currentNum: 6,
}

const chinese = {
    topicName : 'chinese',
    description : '最无聊的学科',
    owner: '不知名女士',
    startTime: new Date(),
    endTime : new Date(),
    deadline : new Date(),
    downNum: 3,
    upNum: 10,
    currentNum: 2,
}

const science = {
    topicName : 'science',
    description : '感觉还行的学科',
    owner: '不知名校长',
    startTime: new Date(),
    endTime : new Date(),
    deadline : new Date(),
    downNum: 4,
    upNum: 11,
    currentNum: 20,
}

const children = {
    topicName : 'children',
    description : '育儿经分享',
    owner: '小红书',
    startTime: new Date(),
    endTime : new Date(),
    deadline : new Date(),
    downNum: 4,
    upNum: 14,
    currentNum: 7,
}

topicModel.insertMany([math, children, science, children], (error, datas) => {
    if(error) console.error(error);
    datas.forEach((element) => {
        console.info('save ' + element.topicName + " successfully!!!!");
    })
})