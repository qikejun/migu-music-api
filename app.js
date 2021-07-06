/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-06-18 08:31:20
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-06 09:53:19
 */
require('@babel/register')

const path = require('path')
const Koa = require('koa')
const koaBody = require('koa-body')
const koaStatic = require('koa-static')
const router = require('#src/routers/router.js')

const app = new Koa()

app.use(koaBody())
app.use(koaStatic(path.join(__dirname, 'public')))

app.use(router.routes()).use(router.allowedMethods())
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server running @ http://localhost:${PORT}`)
})
