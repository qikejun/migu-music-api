/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-06 08:30:44
 * @LastEditors: peng
 * @LastEditTime: 2021-07-08 08:51:48
 */
const Router = require("@koa/router");
const api = require("#src/apiManage/index");

const albumRouter = new Router();

albumRouter.get("/", async (ctx, next) => {
  const pageNo = 1;
  const pageSize = 30;
  const type = 2003;
  const nid = 23854016;
  const params = {
    pageNo,
    pageSize,
    type,
    nid,
  };
  const result = await api.request("album.list", params);
  console.log(result);
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
});

module.exports = albumRouter.routes();
