/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-06 08:29:54
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 21:50:01
 */
module.exports = {
  /**
   * @msg: 推荐歌单
   * @param {
   * pageNo: 默认 1
   * type: 1: 推荐，2: 最新，默认推荐
   * }
   * @return {*}
   */
  recommendPlaylist: {
    url: "/remoting/playlist_bycolumnid_tag",
    method: "GET",
  },
};
