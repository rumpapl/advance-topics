const helper = require("./helper");
const User = require("../../service/user");

module.exports = async (data) => {
  const { currentDateTime, durationInMilliSecond } = data?.data || {};

  try {
    const userData = await User.fetchUserlogBasedOnTimeDuration(
      durationInMilliSecond
    );

    const fileName = helper.getFileName(currentDateTime);
    const filePath = await helper.ensureFolderAndCreateFile(fileName);

    await helper.saveUserLog(userData, filePath);
    console.log("User log successfully saved.");
  } catch (error) {
    console.log(`Error occurred while storing user log. Error:  ${error}`);
  }
};
