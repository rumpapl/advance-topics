const { CronTime } = require("cron-time-generator");
const csvWriter = require("csv-writer");

const User = require("../../../service/user");
const Helper = require("./helper");

const CRON = "User_Log_Download";
const MINUTE_INTERVAL = 10;

const cronExpression = CronTime.every(MINUTE_INTERVAL).minutes();

const task = async () => {
  const userDate = await User.fetchUserlogBasedOnTime(
    MINUTE_INTERVAL * 60 * 1000
  );
  const fileName = Helper.getFileName();

  const writer = csvWriter.createObjectCsvWriter({
    path: Helper.ensureFolderAndCreateFile(fileName),
    header: [
      //   { id: "_id", title: "id" },
      { id: "user_id", title: "User Id" },
      { id: "user_name", title: "User Name" },
      { id: "email_type", title: "Email Type" },
      { id: "message", title: "Message" },
      { id: "created_at", title: "Created At" },
    ],
  });

  writer.writeRecords(userDate).then(() => {
    console.log(`File successfully downloaded`);
  });
  return;
};

const onError = (error) => {
  console.log({ error });
};

const onSuccess = (res) => {
  console.log({ res });
};

module.exports = { id: CRON, cronExpression, task, onError, onSuccess };
