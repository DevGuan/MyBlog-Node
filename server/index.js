'use strict' 
const Koa = require('koa');
const app = new Koa();
const route = require('koa-router');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const mongoose = require('mongoose');
// const routes = require('./routes/routes.js');
const logger = require('koa-logger');

/**
 * config
 */
const config = require('./configs');
/**
 * connect mongodb
 */
mongoose.connect(config.mongoConfig.url);
mongoose.connection.on('error',console.error);
// 布置中间件
app.use(convert.compose(
    logger(),
    bodyParser()
));

// 计算时间
app.use(async(ctx, next) =>{
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.method} ${ctx.url}-----${ms}ms`);
});
/**
 * 路由配置
 */
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,Koa2!</h1>';
});
// app.listen(9096, function(){
//     console.log('app started at port 9096...');
// });
app.listen(config.app.port,()=>{
    console.log('Server is running at http://localhost:' +config.app.port);
});
module.exports = app;