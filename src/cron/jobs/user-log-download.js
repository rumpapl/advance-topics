const { CronTime } = require("cron-time-generator");

const CRON = "User_Log_Download";

const cronExpression = CronTime.every(1).minutes();

const task = () => {
  return `Cron: ${CRON} -- Time: ${new Date()} - says hello world.`;
};

const onError = (error) => {
  console.log(error);
};

const onSuccess = (res) => {
  console.log(res);
};

module.exports = { id: CRON, cronExpression, task, onError, onSuccess };
