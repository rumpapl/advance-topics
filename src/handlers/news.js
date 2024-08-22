const Router = require("@koa/router");
const fetchNews = require("../services");

const router = new Router();

router.get("/news/:country/:category", async (ctx, next) => {
  const { country, category } = ctx.params;

  const news = await fetchNews(country, category);
  ctx.body = { data: news };
  return await next();
});

module.exports = router;
