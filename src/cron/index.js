const cron = require("node-cron");
const { addTaskToQueue } = require("../utils/bullmq");

let count = 0;
// Schedule a cron job to run every minute
cron.schedule("*/5 * * * * *", async () => {
  count++;
  const data = { name: "demo task", count };
  await addTaskToQueue("task_queue", `user: ${count}`, data);
  console.log("Running a task every 5 sec");
});
