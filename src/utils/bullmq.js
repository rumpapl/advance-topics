const { Queue, Worker } = require("bullmq");
const getRedis = require("./redis");

module.exports.addTaskToQueue = async (queueName, jobName, data, options) => {
  const queue = new Queue(queueName, { connection: getRedis() });
  const response = await queue.add(jobName, data, {
    removeOnComplete: {
      age: 3600, // keep up to 1 hour
      count: 500, // keep up to 1000 jobs
    },
    removeOnFail: {
      age: 24 * 3600, // keep up to 24 hours
    },
    ...options,
  });
  await queue.close();

  console.log(`Adding task to queue ${queueName}:`, jobName, data); // Add this log

  return response;
};

module.exports.getWorker = (queueName, cb, options) => {
  return new Worker(queueName, cb, {
    connection: getRedis(),
    //   autorun: false,
    //   ...options,
  });
};
