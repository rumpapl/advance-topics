const { postMessageToEmailQueue } = require("./email");
const { postMessageToSaveUserLogQueue } = require("./save-user-log");

module.exports = { postMessageToEmailQueue, postMessageToSaveUserLogQueue };
