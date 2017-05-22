'use strict' 

const Koa = require('koa');
const app = new Koa();

// 布置中间件

// 打印URL
app.use(async (ctx , next) =>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});
// 计算时间
app.use(async(ctx, next) =>{
    const start = new Date().getTime();
    await next();

    const ms = new Date().getTime() - start;
    console.log(`Time: ${ms}ms`);
});
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,Koa2!</h1>';
});
app.listen(9096, function(){
    console.log('app started at port 9096...');
});

