/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-06-29 20:39:03
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-06 09:50:53
 */
const axios = require('axios')
const Qs = require('qs')
const loader = require('../loader.js')
class apiManage {
  constructor(options) {
    this.axios = axios.create()
    this.options = options || {}
    // console.log(this.options)
  }
  request(key, params = {}) {
    const { api, config } = loader(key)
    let options = { ...this.options, ...config, ...api }
    options.params = params
    const _axios = this.axios
    return new Promise((resolve, reject) => {
      // 临时处理get请求时，数组类型如arr=[1,2]，则转换成arr=1&arr=2
      if (options.method === 'get' || options.method === 'GET') {
        let params = ''
        params = Qs.stringify(options.params, {
          arrayFormat: 'repeat',
        })
        options.data = options.params
        options.params = ''
        options.url = `${options.url}?${params}`
        // console.log(options.url)
      }

      options.headers = options.headers || {}
      options.headers.referer =
        options.headers.referer || 'http://m.music.migu.cn/v3'
      options.xsrfCookieName = 'XSRF-TOKEN'
      options.withCredentials = true

      // console.log(options)
      _axios(options)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (err) {
          reject(err)
        })
    })
  }
  use(interceptors) {
    ;['request', 'response'].forEach((e) => {
      const fns = interceptors[e]
      const interceptor = this.axios.interceptors[e]
      fns && fns.length && interceptor.use.apply(interceptor, fns)
    })
  }
}
module.exports = apiManage
