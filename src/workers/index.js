const getRedis = require("../utils/redis");
const { getWorker } = require("../utils/bullmq");

const worker = getWorker(
  "task_queue",
  async (job) => {
    console.log("worker: ", job.name, job.data);
  },
  {
    connection: getRedis(),
  }
);

worker.on("error", (err) => {
  console.error("Worker encountered an error:", err);
});

worker.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed with error:`, err);
});

worker.on("completed", (job) => {
  console.log(`Job ${job.id} has been completed`);
});

worker.on("active", (job) => {
  console.log(`Job ${job.id} is now active`);
});

console.log("Worker is running...");
