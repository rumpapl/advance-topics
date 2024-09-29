const Router = require("@koa/router");

const User = require("../../../service/user");
const { getJobById } = require("../../../utils/bullmq");
const { EMAIL_QUEUE } = require("../../../queues/config");
const { postMessageToEmailQueue } = require("../../../queues");

const router = new Router();

router.post("/email-communication", async (ctx, next) => {
  const data = ctx.request.body;
  const { emailType } = data;

  if (emailType < 1 || emailType > 3) {
    ctx.body = { message: "Invalid Email Type. It should be within 1 to 3" };
    return await next();
  }

  const res = await postMessageToEmailQueue("send_email", data);
  ctx.body = { message: "data in processing..", taskStatus: res };

  return await next();
});

router.get("/email-communication/:taskId", async (ctx, next) => {
  const taskId = Number(ctx.params.taskId);
  if (isNaN(taskId)) {
    ctx.body = { status: 400, message: "Invalid ID" };
    return await next();
  }

  const res = await getJobById(EMAIL_QUEUE, taskId);

  ctx.body = { message: res?.returnvalue };

  return await next();
});

router.get("/users-log", async (ctx, next) => {
  const res = await User.fetchUserslog();

  ctx.body = { message: res };

  return await next();
});

router.get("/user-log/:userId", async (ctx, next) => {
  const userId = Number(ctx.params.userId);

  if (isNaN(userId)) {
    ctx.body = { status: 400, message: "Invalid User ID" };
    return await next();
  }

  const res = await User.fetchUserlog(userId);

  ctx.body = { message: res };

  return await next();
});

module.exports = router;
