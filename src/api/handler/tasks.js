const Router = require("@koa/router");
const { addTaskToQueue } = require("../../utils/bullmq");

const router = new Router();

router.post("/tasks", async (ctx, next) => {
  // Ensure that the body exists and is an object
  if (!ctx.request.body || typeof ctx.request.body !== "object") {
    ctx.status = 400;
    ctx.body = { error: "Invalid request body" };
    return;
  }
  await addTaskToQueue("task_queue", "user", ctx.request.body);

  return await next();
});

module.exports = router;
