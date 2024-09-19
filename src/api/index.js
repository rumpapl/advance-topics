const Koa = require("koa");
const Router = require("@koa/router");

const { bodyParser } = require("@koa/bodyparser");

const emailCommunicationRouter = require("./handlers/email-communication");

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = { message: "Hello world!" };

  return await next();
});

app.use(bodyParser());

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
app
  .use(emailCommunicationRouter.routes())
  .use(emailCommunicationRouter.allowedMethods());

app.listen(8080, () => {
  console.log("App started at port:8080");
});
