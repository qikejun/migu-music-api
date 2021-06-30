/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-24 21:24:30
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-29 23:37:20
 */
const axios = require('axios')

// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;text/plain;';
axios.defaults.responseType = 'json;text/plain;charset=utf-8;';
// let uURL = 'https:/u.y.qq.com/cgi-bin/musicu.fcg';

function request (url, method, options = {}, isUUrl = 'c') {
  let baseURL = '';
  return axios.get('https://m.music.migu.cn/migu/remoting/scr_search_tag', {keyword:'周杰伦'})
    .then(
      response => {
        if (!response) {
          throw Error('response is null');
        }
        console.log(`${url} request success`.info);
        return response;
      },
      error => {
        console.log(`${url} request error`.error);
        throw error;
      }
    )
}

module.exports = request;