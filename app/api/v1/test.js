const Router = require('koa-router');
const UserSrv = require('../../service/user')
const router = new Router();

router.post('/public/test',async (ctx, next) => {
//   const params= ctx.request.body
//   const res =  await UserSrv.register(params)
//   console.log(res);
  
  ctx.response.status = 200;
  ctx.body = '测试接口'
});

module.exports = router