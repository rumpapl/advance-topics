const { CronTime } = require("cron-time-generator");

const { postMessageToSaveUserLogQueue } = require("../../queues");

const CRON = "user_log_save";
const MINUTE_INTERVAL = 1;

const cronExpression = CronTime.every(MINUTE_INTERVAL).minutes();

const task = async () => {
  const currentDateTime = new Date();
  const durationInMilliSecond = MINUTE_INTERVAL * 60 * 1000;
  const data = {
    currentDateTime,
    durationInMilliSecond,
  };

  await postMessageToSaveUserLogQueue("user_log_based_on_duration", data);

  return `CRON: ${CRON} -- Task added at datetime: ${currentDateTime} with duration(MS): ${durationInMilliSecond}`;
};

const onError = (error) => {
  console.log(error);
};

const onSuccess = (res) => {
  console.log(res);
};

module.exports = { id: CRON, cronExpression, task, onError, onSuccess };
