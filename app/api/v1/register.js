const Router = require('koa-router');

const router = new Router();

router.get('/register', (ctx, next) => {
  ctx.body="注册成功"
  // ctx.router available
});

module.exports = router