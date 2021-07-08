/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-06 08:30:03
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 21:52:16
 */
const Router = require("@koa/router");
const api = require("../apiManage/index");

const songListRouter = new Router();
const pageNo = 1;
const pageSize = 30;

const typeMap = {
  1: 15127315, // 推荐
  2: 15127272, // 最新
};

songListRouter.get("/recommendPlaylist", async (ctx, next) => {
  const params = {
    playListType: "2",
    type: 1,
    columnId: typeMap[2],
    tagId: "",
    startIndex: (pageNo - 1) * pageSize,
  };

  const result = await api.request("songList.recommendPlaylist", params);
  const list = result.retMsg.playlist.map(
    ({
      summary,
      image,
      createName,
      playCount,
      contentCount,
      createUserId,
      playListName,
      playListId,
    }) => ({
      name: playListName,
      id: playListId,
      picUrl: image,
      playCount: playCount,
      songCount: Number(contentCount),
      creator: {
        name: createName,
        id: createUserId,
      },
      intro: summary,
    })
  );
  ctx.body = {
    result: 100,
    data: {
      list,
      total: result.retMsg.countSize,
    },
  };
});

module.exports = songListRouter.routes();
