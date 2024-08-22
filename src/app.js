const Koa = require("koa");
const Router = require("@koa/router");
const newsRouter = require("./handlers/news");

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = { message: "Application Running ...." };

  return await next();
});

app.use(async function (ctx, next) {
  try {
    return await next();
  } catch (err) {
    console.error(err);

    ctx.body = { error: err.message };
    ctx.status = 500;
  }
});

app.use(router.routes()).use(router.allowedMethods());
app.use(newsRouter.routes()).use(newsRouter.allowedMethods());

app.listen(8080, () => console.log("App started at Port: 8080"));
