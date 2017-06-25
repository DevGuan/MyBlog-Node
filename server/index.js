'use strict' 
// const Koa = require('koa');
// import {koa} from 'koa';
import Koa from "koa"
const app = new Koa();
const route = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
import onerror from 'koa-onerror';
import middleware from './middleware';
import api from './api';

/**
 * config
 */
import config from './configs';
/**
 * connect mongodb
 */
mongoose.connect(config.mongoConfig.url);
mongoose.connection.on('error',console.error);
// 布置中间件
app.use(middleware());
onerror(app);
/**
 * api/router
 */
app.use(api());

app.listen(config.app.port,()=>{
    console.log('Server is running at http://localhost:' +config.app.port);
});
module.exports = app;