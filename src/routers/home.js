/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-07-05 08:56:47
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 08:55:12
 */
const Router = require("@koa/router");
const api = require("../apiManage/index");

const homeRouter = new Router();

homeRouter.get("/recommendPlaylist", async (ctx, next) => {
  const params = {
    keyword: "张学友",
    pgc: pageNum,
    rows: pageSize,
    type: typeMap["song"],
  };
  await api.request("home.recommendPlaylist", params).then((res) => {
    console.log(123, res);
    ctx.status = 200;
    ctx.body = JSON.stringify(res);
  });
});

module.exports = homeRouter;
