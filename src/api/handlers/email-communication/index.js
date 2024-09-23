const Router = require("@koa/router");

const { getJobById } = require("../../../utils/bullmq");
const { EMAIL_QUEUE } = require("../../../queues/config");
const { postMessageToEmailQueue } = require("../../../queues");
const User = require("../../../service/user");

const router = new Router();

router.post("/email-communication", async (ctx, next) => {
  const data = ctx.request.body;

  const res = await postMessageToEmailQueue("send_email", data);

  ctx.body = { message: "data in processing..", task_status: res };

  return await next();
});

router.get("/email-communication/:task_id", async (ctx, next) => {
  const task_id = Number(ctx.params.task_id);
  if (isNaN(task_id)) {
    ctx.body = { status: 400, message: "Invalid ID" };
    return await next();
  }

  const res = await getJobById(EMAIL_QUEUE, task_id);

  ctx.body = { message: res?.returnvalue };

  return await next();
});

router.get("/users-log", async (ctx, next) => {
  const res = await User.fetchUserslog();

  ctx.body = { message: res };

  return await next();
});

router.get("/user-log/:user_id", async (ctx, next) => {
  const user_id = Number(ctx.params.user_id);

  if (isNaN(user_id)) {
    ctx.body = { status: 400, message: "Invalid User ID" };
    return await next();
  }

  const res = await User.fetchUserlog(user_id);

  ctx.body = { message: res };

  return await next();
});

module.exports = router;
