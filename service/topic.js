const topicModel = require('../db/dev/topic.js').topic
const topic = {}

//创建话题
topic.create = async function(ctx, next) {
    let topic = ctx.request.body;
    topicModel.save(topic, (error, topic) => {
        if(error) {
            console.error(error);
        }
        console.info('save ' +  topic.topicName + ' successfully!!!');
    })
}

//删除话题
topic.delete = async function(ctx, next) {

}

//查找话题
topic.lists = async function(ctx, next) {
    let lists = await topicModel.find((error, topics) => {
        if(error) console.error;
        return topics;
    })
    ctx.body = lists;
}


//更新话题
topic.update = async function(ctx, next) {

}

module.exports.topicService = topic