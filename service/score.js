const scoreModel = require('../db/dev/score').score
const score = {}

//保存积分
score.save = async function(ctx, next) {
    let body = ctx.request.body;
    let { score } = body;
    let res = { code: "200" };
    let saveInfo = await scoreModel.save(score, (error, result) => {
        if(error) {
            console.error(error);
            res.code = "500";
        }
        return result;
    })
    res.data = saveInfo;
    return ctx.body = res;
}

//获取积分数据
score.lists = async function(ctx, next) {
    
}

//更新积分
score.update = async function(ctx, next) {

}

//删除积分
score.delete = async function(ctx, next) {

}


module.exports.scoreService = score;