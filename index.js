const Koa = require('koa');
const path = require('path')
const app = new Koa();
const routers =  require('./app/api')
const koaBody = require('koa-body');
const koajwt = require('koa-jwt');
const jsonwebtoken = require('jsonwebtoken');

const {SECRET} = require('./app/config')

app.use(koaBody({
  multipart:true, // 支持文件上传
  encoding:'gzip',
  formidable:{
    uploadDir:path.join(__dirname,'public/upload/'), // 设置文件上传目录
    keepExtensions: true,    // 保持文件的后缀
    maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
    onFileBegin:(name,file) => { // 文件上传前的设置
    },
  }
}))
.use(async (ctx, next) => {
  let token = ctx.header.authorization;
  if(token){
    const {id} = jsonwebtoken.verify(token.split(' ')[1],SECRET)
    ctx.userId =  id
  }
  return next().catch((err) => {
      if (err.status === 401) {
          ctx.status = 401;
          ctx.body = {
              code: 401,
              msg: err.message
          }
      } else {
          throw err;
      }
  })
}).use(koajwt({ secret: SECRET }).unless({
    // 公共接口不需要验证
    path: [/^\/public/]
}));

routers(app)

app.listen(3000);