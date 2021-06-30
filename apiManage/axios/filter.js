/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-29 21:42:40
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-29 22:10:08
 */
module.exports =  {
  response: [
    function (response) {
      // return response.data;
      if (response.status !== 200) {
        return Promise.reject(response)
      } else {
        if (response.data.code && response.data.code !== 200) {
          return Promise.reject(response)
        }
        return response.data
      }
    }
  ]
}
