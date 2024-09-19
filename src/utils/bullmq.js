const { Queue } = require("bullmq");

const { getRedis } = require("./redis");

module.exports.getJobById = async (queueName, jobId) => {
  const queue = new Queue(queueName, { connection: getRedis() });
  const job = await queue.getJob(jobId);
  await queue.close();

  if (!job) {
    return `No job found with id  -- ${jobId}`;
  } else {
    return job;
  }
};
