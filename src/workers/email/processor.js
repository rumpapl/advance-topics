const User = require("../../service/user");
const { EMAIL_TYPE } = require("../../queues/config");

const handleTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

module.exports = async (data) => {
  let message = "";
  const result = await handleTask();

  if (result) {
    const emailType = data?.data?.email_type - 1;
    const userId = data?.data?.user_id;
    const userName = data?.data?.user_name;
    message = `${EMAIL_TYPE[emailType]} sent to ${userName} with id: ${userId}`;
  }

  const formatData = { ...data?.data, message };
  await User.addInfo(formatData);

  return formatData;
};
