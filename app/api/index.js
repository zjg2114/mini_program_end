const requireDirectory = require('require-directory')
const routers =  requireDirectory(module,'./v1')

module.exports = (app)=>{
 Object.values(routers).forEach(route=>{
    app.use(route.routes())
    .use(route.allowedMethods())
 }) 
}
