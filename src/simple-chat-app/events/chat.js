// create event-emitter instance
const EventEmitter = require("events");
class ChatEventEmitter extends EventEmitter {}

const chat = new ChatEventEmitter();

module.exports = chat;
