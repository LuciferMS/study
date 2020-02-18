const baseUrl = process.cwd();
const router = require('koa-router')()
const userService = require(baseUrl + '/service/user.js').userService

router.prefix('/users')

router.get('/register', async (ctx, next) => {
  let query = ctx.request.query;
  ctx.body = query;
  console.info(query);
})

router.get('/login', userService.login);

module.exports = router
