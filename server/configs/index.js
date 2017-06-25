'use strict'
let config = {
    app:{
        port:process.env.PORT || 8096,
        baseApi:'/api',
    },
    mongoConfig:{
        url:'mongodb://localhost/myBlog',
        // opts:{
        //     user:'',
        //     psw:''
        // }
    }
}
// module.exports = config;
export default config;