/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-06-29 21:42:40
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-06 09:50:19
 */

const token = ''
module.exports = {
  response: [
    function (response) {
      const res = response.data
      // if (res.code === 401) {
      //   const loc = window.location.href
      //   const url = loc.split('?ticket')[0]
      //   window.location.href =
      //   res.data.loginUrl +
      //   encodeURIComponent(url)
      //   console.log(window.location.href, 222)
      //   return Promise.reject(response)
      // }
      return response
    },
  ],
  request: [
    function (config) {
      config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
      config.headers['Authorization'] = `Bearer ${token}`
      config.withCredentials =
        config.withCredentials !== undefined ? config.withCredentials : true
      return config
    },
  ],
}
