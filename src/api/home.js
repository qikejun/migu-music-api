/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-05 08:49:37
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 08:48:57
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
    url: "/recommend/playlist",
    method: "GET",
  },
  /**
   * @msg: 新歌
   * @param {
   * pageNo: 默认 1
   * pageSize:  默认 10
   * }
   * @return {*}
   */
  newSongs: {
    url: "/recommend/playlist",
    method: "GET",
  },
  /**
   * @msg: 新专辑
   * @param {
   * pageNo: 默认 1，
   * pageSize: 默认 10
   * }
   * @return {*}
   */
  newAlbums: {
    url: "/new/albums",
    method: "GET",
  },
};
