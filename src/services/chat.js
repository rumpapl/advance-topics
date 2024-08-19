const {
  chat,
  USER_JOINED_EVENT,
  MESSAGE_SENT_EVENT,
  USER_LEFT_EVENT,
} = require("../events/chat");

const joinChat = (user) => chat.emit(USER_JOINED_EVENT, user);

const sendMessage = (message) => chat.emit(MESSAGE_SENT_EVENT, message);

const leaveChat = (user) => chat.emit(USER_LEFT_EVENT, user);

module.exports = { joinChat, sendMessage, leaveChat };
