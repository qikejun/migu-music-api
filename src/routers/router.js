/*
 * @Descripttion:
 * @Author: pengpeng
 * @Date: 2021-06-21 19:36:50
 * @LastEditors: peng
 * @LastEditTime: 2021-07-07 21:49:11
 */
// 搜索接口
const Router = require("@koa/router");
const api = require("#src/apiManage/index.js");

const router = new Router();

const pageNum = 1;
const pageSize = 20;

const typeMap = {
  song: 2,
  singer: 1,
  album: 4,
  playlist: 6,
  mv: 5,
  lyric: 7,
};

router.get("/search", async (ctx, next) => {
  const params = {
    keyword: "张学友",
    pgc: pageNum,
    rows: pageSize,
    type: typeMap["song"],
  };
  await api.request("common.search", params).then((res) => {
    console.log(123, res);
    ctx.status = 200;
    ctx.body = JSON.stringify(res);
  });
});
router.use("/home", require("./home.js"));
router.use("/songList", require("./songList.js"));
module.exports = router;
