const topicModel = require('../db/dev/topic.js').topic

const topic = {}

//创建话题
topic.create = async function(ctx, next) {
    let body = ctx.request.body;
    let { topic }  = body;
    let res = { code: '200' }
    let saveInfo = await topicModel.save(topic, (error, topic) => {
        if(error) {
            console.error(error);
            res.code = "500"
        }
        return topic
    })
    res.data = saveInfo;
    return ctx.body = res;
}

//删除话题
topic.delete = async function(ctx, next) {
    let query = ctx.request.query;
    let { id } = query;
    let res = { code: "200"};
    let delInfo = topicModel.findByIdAndDelete({_id: id}, (error, result) => {
        if(error){
            console.error(error);
            res.code = 500;
        }
        return result;
    })
    res.data = delInfo;
    return ctx.body = res;
}

//查找话题
topic.lists = async function(ctx, next) {
    let res = {code: '200'};
    let data = await topicModel.find((error, topics) => {
        if(error) {
            console.error(error);
            res.code = 500;
            return [];
        }
        return topics;
    })
    let count = await topicModel.count((error, count) => {
        if(error) console.error(error);
        return count;
    })
    res.count = count;
    res.data = data;
    return ctx.body = res;
}


//更新话题
topic.update = async function(ctx, next) {
    let query = ctx.request.query;
    let { topic } = query;
    let res = { code: "200" };
    let updateInfo = await topicModel.updateOne(topic, (error, result) => {
        if(error){
            console.error(error);
            res.code = "500"
        }
       return result;
    })
    res.data = updateInfo;
    return ctx.body = res;
}

module.exports.topicService = topic