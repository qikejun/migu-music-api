/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-21 19:36:50
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-01 08:35:58
 */
// 搜索接口
const Router = require('@koa/router')
const router = new Router()
const axios = require('axios')
const api = require('./../apiManage/index')
const request = require('./../api/request')

const pageNum = 1
const pageSize = 20

const typeMap = {
  song: 2,
  singer: 1,
  album: 4,
  playlist: 6,
  mv: 5,
  lyric: 7,
};

router.get('/search', async (ctx, next) => {
  const params = {
    keyword: "张学友",
    pgc: pageNum,
    rows: pageSize,
    type: typeMap["song"],
  }
  await api.request('common.search',params).then(res => {
  // await request().then(res => {
    console.log(123,res)
    ctx.status = 200
    ctx.body = JSON.stringify(res)
  })
})

module.exports = router;