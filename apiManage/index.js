/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-29 21:44:33
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-29 23:17:29
 */
const ApiManage = require('./axios/index')
const cas = require('./axios/cas')
const filter = require('./axios/filter')

const api = new ApiManage(
  {
    baseURL: 'https://m.music.migu.cn/migu/',
    // timeout: 3000,
    // proxy: {
    //   host: '127.0.0.1',
    //   port: 80,
    // }
  }
)
api.use(cas)
api.use(filter)

module.exports = api