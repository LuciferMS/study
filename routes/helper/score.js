const baseUrl = process.cwd();
const scoreService = require(`${baseUrl}/service/score.js`).scoreService

const score = [
    {
        type: 'post',
        url: '/save',
        handler: scoreService.save
    },
    {
        type: 'get',
        url: '/lists',
        handler: scoreService.lists
    },
    {
        type: 'post',
        url: '/delete',
        handler: scoreService.delete,
    },
    {
        type: 'post',
        url: '/update',
        handler: scoreService.update
    }
]

const configs = {
    prefix: '/score',
    urls: score
}

module.exports.scoreRouter = configs