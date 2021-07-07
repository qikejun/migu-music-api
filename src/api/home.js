/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-05 08:49:37
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 21:14:51
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
  /**
   * @msg: 新歌
   * @param {
   * pageNo: 默认 1
   * pageSize:  默认 10
   * }
   * @return {*}
   */
  newSongs: {
    url: "/remoting/cms_list_tag",
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
    url: "/remoting/cms_list_tag",
    method: "GET",
  },
};
