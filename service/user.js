const userModel = require('../db/dev/user').user

const user = {}

/**
 * 用户登录逻辑
 * TODO:
 *  1.未来考虑加入redis缓存登陆状态
 *  2.写一个同意的http返回类型
 */
user.login = async function(ctx, next){
    let user = ctx.request.query;
    console.info(user);
    if(!user.username) throw "username illgel!!!";
    const query = userModel.findOne().where('username').equals(user.username);
    await query.exec((error, result) => {
        if(error) {
            console.error(error);
        }
        console.info(result);
        console.info(result.password == user.password);
    })
    console.info('login success!!');
    ctx.body = 'login success';
}

/**
 * 用户注册逻辑
 */
user.register = async function(ctx, next){
    let user = ctx.request.query;
    if(!user.username) throw "username illgel!!!!"
    const u = new userModel(user);
    u.save((error, u) => {
        if(error) console.error(error);
        console.info("save user " + u.username + " successfully!!!");
    })
}

module.exports.userService = user;