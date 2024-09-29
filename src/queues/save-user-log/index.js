const { Queue } = require("bullmq");

const { SAVE_USER_LOG_QUEUE } = require("../config");
const { getRedis } = require("../../utils/redis");

module.exports.postMessageToSaveUserLogQueue = async (
  jobName,
  data,
  options
) => {
  const queue = new Queue(SAVE_USER_LOG_QUEUE, { connection: getRedis() });

  const response = await queue.add(jobName, data, {
    removeOnComplete: {
      age: 3600, // keep up to 1hr
      count: 500, // keep up tp 500 jobs
    },
    removeOnFail: {
      age: 24 * 3600, // keep up to 24 hours
    },
    ...options,
  });

  queue.close();

  return response;
};
