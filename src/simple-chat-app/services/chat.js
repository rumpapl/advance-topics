const chat = require("../events/chat");
const {
  USER_JOINED_EVENT,
  MESSAGE_SENT_EVENT,
  USER_LEFT_EVENT,
} = require("../events/events");

// defined all event-handlers
const userJoinedHandler = (user) => {
  console.log(`${user} has joined the chat.`);
};

const messageSentHandler = (message) => {
  console.log(`New Message Added: ${message}`);
};
const userLeftHandler = (user) => {
  console.log(`${user} has left the chat.`);
};

// bind all event with handlers
chat.on(USER_JOINED_EVENT, userJoinedHandler);
chat.on(MESSAGE_SENT_EVENT, messageSentHandler);
chat.on(MESSAGE_SENT_EVENT, (data) => console.log({ data }));
chat.on(USER_LEFT_EVENT, userLeftHandler);

const joinChat = (user) => chat.emit(USER_JOINED_EVENT, user);

const sendMessage = (message) => chat.emit(MESSAGE_SENT_EVENT, message);

const leaveChat = (user) => chat.emit(USER_LEFT_EVENT, user);

module.exports = { joinChat, sendMessage, leaveChat };
