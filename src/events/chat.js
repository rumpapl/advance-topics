// create event-emitter instance
const EventEmitter = require("events");
const chat = new EventEmitter();

// defined all events
const USER_JOINED_EVENT = "userJoined";
const MESSAGE_SENT_EVENT = "messageSent";
const USER_LEFT_EVENT = "userLeft";

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
chat.on(USER_LEFT_EVENT, userLeftHandler);

module.exports = {
  chat,
  USER_JOINED_EVENT,
  MESSAGE_SENT_EVENT,
  USER_LEFT_EVENT,
};
