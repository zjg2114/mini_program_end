const Router = require('koa-router');

const router = new Router();

router.get('/login', (ctx, next) => {
  // ctx.router available
  ctx.body="阿斯达"
});

module.exports = router