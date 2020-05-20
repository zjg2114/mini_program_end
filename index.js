const Koa = require('koa');
const app = new Koa();
const routers =  require('./app/api')
routers(app)

app.listen(3000);