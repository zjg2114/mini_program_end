const Router = require('koa-router');
const UserSrv = require('../../service/user')
const router = new Router();

router.post('/public/login', async (ctx, next) => {
  const params = ctx.request.body
  const res = await UserSrv.verify(params)
  ctx.body=res
});

module.exports = router