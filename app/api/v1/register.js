const Router = require('koa-router');
const UserSrv = require('../../service/user')
const router = new Router();

router.post('/public/register',async (ctx, next) => {
  console.log(1);
  
  const params= ctx.request.body
  const res =  await UserSrv.register(params)
  console.log(res);
  
  ctx.response.status = 200;
  ctx.body = res
});

module.exports = router