

export default (router) => {
    router.get('/123',ctx => { 
        ctx.body = 'hello';
        console.log('567!');
    });
}