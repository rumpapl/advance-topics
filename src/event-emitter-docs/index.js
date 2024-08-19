// Default import for EventEmitter class from the 'events' module
const EventEmitter = require("events");

// Named imports from the 'events' module
const { errorMonitor, getEventListeners, getMaxListeners } = require("events");

// Create a new EventEmitter instance
const eventEmitter = new EventEmitter();

// Constants to define event names
const EVENT = "event";
const ERROR = "error";

// Listener for the 'newListener' event, which is triggered whenever a new listener is added
eventEmitter.on("newListener", (event, listener) =>
  console.log(
    "newListener ==> ",
    `Event Title: `,
    { event }, // Log the name of the event to which a new listener is added
    "----",
    "Event Listener:",
    {
      listener, // Log the listener function that was added
    }
  )
);

// First listener for the 'event' event
eventEmitter.on(EVENT, function firstListener() {
  console.log({ EVENT }, "Listener: ", "Hello! First listener");
});

// Second listener for the 'event' event, with two arguments
eventEmitter.on(EVENT, function secondListener(arg1, arg2) {
  console.log(
    { EVENT },
    "Listener: ",
    `Event with parameters ${arg1}, ${arg2} in second listener`
  );
});

// Third listener for the 'event' event, accepts any number of arguments
eventEmitter.on(EVENT, function thirdListener(...args) {
  const parameters = args.join(", ");
  console.log(
    { EVENT },
    "Listener: ",
    `Event with parameters ${parameters} in third listener`
  );
});

// Listener for the 'error' event, handles errors
eventEmitter.on(ERROR, (err) => {
  console.log({ ERROR }, "Listener: ", `Error Handler with error --- ${err}`);
});

// Use events.errorMonitor to monitor errors without consuming them
eventEmitter.on(errorMonitor, (err) => {
  console.error(`[errorMonitor] Error occurred: ${err}`);
});

// Emit the 'event' event with multiple arguments
eventEmitter.emit(EVENT, 1, 2, 3, 4);

// Emit the 'error' event with an error message
eventEmitter.emit(ERROR, "Something went wrong");

// Get and log the names of events for which listeners are registered
console.log("eventNames: ", eventEmitter.eventNames());

// Log the default maximum number of listeners that can be registered for an event
console.log("defaultMaxListeners: ", eventEmitter.getMaxListeners());

// Set the maximum number of listeners for the 'eventEmitter' instance
eventEmitter.setMaxListeners(2); // **==> Discuss: // **==> need to discues where this efect?

// Log the current maximum number of listeners using the default import
console.log("getMaxListeners: ", eventEmitter.getMaxListeners());

// Log the current maximum number of listeners using the named import
console.log("getMaxListeners: ", getMaxListeners(eventEmitter));

// Log the list of listeners for the 'event' event
console.log("getEventListeners: ", getEventListeners(eventEmitter, EVENT));
