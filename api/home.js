/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-07-05 08:49:37
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-07-05 08:56:20
 */
/**
 * @msg: 推荐歌单
 * @param {
 * pageNo: 默认 1
 * type: 1: 推荐，2: 最新，默认推荐
 * }
 * @return {*}
 */
export const recommendPlaylist = {
  url: '/recommend/playlist',
  method: 'GET'
}
/**
 * @msg: 新歌
 * @param {
 * pageNo: 默认 1
 * pageSize:  默认 10
 * }
 * @return {*}
 */
export const newSongs = {
  url: '/new/songs',
  method: 'GET'
}
/**
 * @msg: 新专辑
 * @param {
 * pageNo: 默认 1，
 * pageSize: 默认 10
 * }
 * @return {*}
 */
export const newAlbums = {
  url: '/new/albums',
  method: 'GET'
}