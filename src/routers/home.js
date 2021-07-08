/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-05 08:56:47
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 21:47:54
 */
const Router = require("@koa/router");
const api = require("../apiManage/index");

const homeRouter = new Router();
const pageNo = 1;
const pageSize = 12;

homeRouter.get("/newSongs", async (ctx, next) => {
  const params = {
    pageSize,
    pageNo: pageNo,
    nid: 23853978,
  };
  const result = await api.request("home.newSongs", params);
  const list = result.result.results.map(({ songData }) => ({
    name: songData.songName,
    id: songData.songId,
    cid: songData.copyrightId,
    artists: songData.singerName.map((name, i) => ({
      name,
      id: songData.singerId[i],
    })),
    picUrl: songData.picM,
    url: songData.listenUrl,
  }));
  ctx.body = {
    result: 100,
    data: {
      list,
      total: result.result.totalCount,
    },
  };
  // console.log(result.retMsg.playlist.length);
});
homeRouter.get("/newAlbums", async (ctx, next) => {
  const params = {
    pageSize,
    pageNo: pageNo,
    nid: 23854016,
    type: 2003,
  };
  const result = await api.request("home.newAlbums", params);
  const list = result.result.results.map(({ albumData }) => {
    const { albumsDes, singerId, albumId, albumName, albumsPicUrl } = albumData;
    const albumInfo = albumsDes.split("\n");
    return {
      name: albumName,
      id: albumId,
      picUrl: albumsPicUrl,
      artists: [
        {
          name: albumInfo[1].split("：")[1],
          id: singerId,
        },
      ],
      songCount: Number(albumInfo[4].split("：")[1]),
      publishTime: albumInfo[5].split("：")[1],
    };
  });
  ctx.body = {
    result: 100,
    data: {
      list,
      total: result.result.totalCount,
    },
  };
  // console.log(result.retMsg.playlist.length);
});

module.exports = homeRouter.routes();
