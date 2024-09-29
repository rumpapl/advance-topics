const User = require("../../service/user");
const { EMAIL_TYPE } = require("../../queues/config");

const handleTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
      // reject();
    }, 3000);
  });
};

module.exports = async (data) => {
  try {
    let message = "";
    const result = await handleTask();

    if (result) {
      const emailTypeIndex = data?.data?.emailType - 1;
      const userId = data?.data?.userId;
      const userName = data?.data?.userName;
      message = `${EMAIL_TYPE[emailTypeIndex]} sent to ${userName} with id: ${userId}`;
    }

    const formatData = { ...data?.data, message };
    await User.addInfo(formatData);

    return formatData;
  } catch (error) {
    console.log(error);
    return `Something went wrong. Fail to send email.`;
  }
};
