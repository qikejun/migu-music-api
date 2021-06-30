/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-21 19:36:50
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-29 23:40:13
 */
// 搜索接口
const Router = require('@koa/router')
const router = new Router()
const axios = require('axios')
const api = require('./../apiManage/index')
const request = require('./../api/request')

router.get('/search', async (ctx, next) => {
  // await api.request('common.search').then(res => {
  await request().then(res => {
    console.log(123,res)
    ctx.status = 200
    ctx.body = JSON.stringify(res)
  })
})

module.exports = router;