const userModel = require('../db/dev/user').user

//顶层命名空间
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
            //TODO 构建错误错误状态码
            console.error(error);
        }
        //TODO 构建返回信息
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
    userModel.save(user, (error, u) => {
         //TODO 构建错误码
         if(error) console.error(error);
         //TODO 注册成功，跳转登陆页面
         console.info("save user " + u.username + " successfully!!!");
    })
}

module.exports.userService = user;