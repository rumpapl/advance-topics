const path = require("path");
const { Worker } = require("bullmq");

const { getRedis } = require("../../utils/redis");
const { SAVE_USER_LOG_QUEUE } = require("../../queues/config");

const processorFile = path.join(__dirname, "processor.js");
const worker = new Worker(SAVE_USER_LOG_QUEUE, processorFile, {
  connection: getRedis(),
  autorun: false,
  concurrency: 1,
});

worker.on("error", (err) => {
  console.error(err);
});

worker.on("failed", (job, err) => {
  console.error(job, "--", err);
});

worker.run();
