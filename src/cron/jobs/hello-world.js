const { CronTime } = require("cron-time-generator");

const CRON = "hello_world";

const cronExpression = CronTime.everyMinute();

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
