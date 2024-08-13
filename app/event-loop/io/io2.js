const https = require("https");

module.exports.IO_TASK_2 = () => {
  // Making an HTTP GET request (I/O task)
  https
    .get("https://jsonplaceholder.typicode.com/todos/1", (response) => {
      let data = "";

      // A chunk of data has been received.
      response.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      response.on("end", () => {
        console.log(
          "I/O QUEUE: 2st task =>",
          "Received data:",
          JSON.parse(data)
        );
      });
    })
    .on("error", (err) => {
      console.error("I/O QUEUE: 2st task =>", "Error with the request:", err);
    });
};
