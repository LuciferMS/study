const userModel = require('../db/dev/user').user
const jwt = require('jsonwebtoken');

//顶层命名空间
const user = {}

/**
 * 用户登录逻辑
 * TODO:
 *  1.未来考虑加入redis缓存登陆状态
 *  2.写一个同意的http返回类型
 */
user.login = async function(ctx, next) {
    let user = ctx.request.body;
    let res = {}
    if(!user.username) {
        res.code = 500;
    }
    let u = await userModel.findOne({username: user.username}, (error, result) => {
        if(error) console.error(error);
        return result;
    })
    if(u.username == user.username){
        res.msg = "success";
        res.user = u;
    }else{
        res.msg = "failed";
    }
    let token = jwt.sign({
        name: u.username,
        _id: u._id,
    }, 'my_token', {expiresIn: '2h'});
    res.token = token;
    res.code = 200;
    return ctx.body = res
}

/**
 * 用户注册逻辑
 */
user.register = async function(ctx, next) {
    let user = ctx.request.query;
    if(!user.username) throw "username illgel!!!!"
    userModel.save(user, (error, u) => {
         //TODO 构建错误码
         if(error) console.error(error);
         //TODO 注册成功，跳转登陆页面
         console.info("save user " + u.username + " successfully!!!");
    })
}

//删除用户
user.delete = async function(ctx, next) {
    
}

//更新用户信息
user.update = async function(ctx, next) {

}

module.exports.userService = user;