const baseUrl = process.cwd();
const topicService = require(`${ baseUrl }/service/topic.js`).topicService;

const topic = [
    {
        type: 'get',
        url: '/lists',
        handler: topicService.lists
    },
    {
        type: 'post',
        url: '/create',
        handler: topicService.create
    },
    {
        type: 'post',
        url: '/update',
        handler: topicService.update
    },
    {
        type: 'post',
        url: '/delete',
        handler: topicService.delete
    }
]

const config = {
    prefix: '/topic',
    urls: topic
}

module.exports.topicRouters = config