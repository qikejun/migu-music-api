/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-18 08:31:20
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-24 21:32:37
 */
require("@babel/register")

const path = require('path')
const Koa = require('koa');
const app = new Koa();

const router = require('./routers/router')

const koaBody = require('koa-body')
const static = require('koa-static')

app.use(koaBody());
app.use(static(
  path.join(__dirname,  'public')
));

app.use(router.routes())
  .use(router.allowedMethods())
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running @ http://localhost:${PORT}`)
});