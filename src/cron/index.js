const cron = require("node-cron");
const jobs = require("./jobs");

const cronDefaultOpts = {};
const timezone = process.env.TIMEZONE;

if (timezone) cronDefaultOpts["timezone"] = timezone;

for (const job of jobs) {
  cron.schedule(
    job?.cronExpression,
    () => {
      handleScheduleJob(job);
    },
    {
      ...cronDefaultOpts,
      ...job?.options,
    }
  );
}

const handleScheduleJob = async (job) => {
  try {
    const response = await job?.task();
    if (job?.onSuccess) {
      job?.onSuccess(response);
    } else {
      console.log(`Cron Job ID: ${job.id} - Response`, response);
    }
  } catch (error) {
    if (job?.onError) {
      job?.onError(`Cron Job ID: ${job.id} - Error ${error}`);
    } else {
      console.log(`Cron Job ID: ${job.id} - Error`, error);
    }
  }
};

module.exports = cron;
