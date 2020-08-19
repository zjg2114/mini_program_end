const Router = require('koa-router');
const router = new Router();
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const moment = require('moment')
let globalCount = 0

router.get('/public/test',async (ctx, next) => {
  let count = 0
  let totalCWS = fs.createWriteStream(path.join(__dirname,`../../../public/h5log/log-${moment().format('MM-DD')}.txt`),{
    encoding:'utf8',
    flags: 'w'
  });
  let writeStream = fs.createWriteStream(path.join(__dirname,`../../../public/h5log/log-${moment().format('MM-DD HH:mm:ss')}.txt`),{
    encoding:'utf8',
    flags: 'w'
  });
  writeStream.on('error',(err)=>{
    console.log(err);
    
  })
  writeStream.on('finish', () => {
    console.log('写入已完成');
    totalCWS.write(`本日总共发送埋点${globalCount}个`)
  });
  const duration =  (ctx.query.duration || 1)*60*60*1000
  const now = +new Date()
  
  const timerId =  setInterval(async() => {
      if( + new Date() - now > duration){
          clearInterval(timerId);
           writeStream.write(`${+ new Date()}本次总共发的埋点--${count}\n`,()=>{

             writeStream.end()
           })
           return
      }
      let baseData = Buffer.from(JSON.stringify({
        eventcode: 'log',
        logtype: 20000,
        ts: + new Date()
      })).toString('base64');
      
      const {data}=  await  axios.get(`https://log.changingedu.com/logdata/ets.html?eventType=3&msg=${baseData}`)
      // const {data}=  await  axios.get(`https://log-tst.changingedu.com/h5log.html?eventType=3&msg=${baseData}`)
      
      if(data.includes('ok')){
        console.log(count);
        console.log(globalCount);
        
        globalCount++
        count++
        writeStream.write(`${moment().format('MM-DD HH:mm:ss')}发的埋点--${count}--${new Buffer(baseData, 'base64').toString()}\n`)
      }
  }, 1000);
  ctx.body = '正在发送埋点';
});

module.exports = router