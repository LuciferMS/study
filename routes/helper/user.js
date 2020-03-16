const basrUrl = process.cwd();
const userHandlers = require('${baseUrl}/service/user.js')

const user = [
    {
        type: 'post',
        url: '/register',
        handler: userHandlers.register
    },
    {
        type: 'post',
        url: '/login',
        handler: userHandlers.login
    }
]

const configs = {
    prefix: '/users',
    urls: user
}

module.exports.userRouter = configs