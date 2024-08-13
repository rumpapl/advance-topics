const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "sample.txt");

module.exports.IO_TASK_1 = () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("I/O QUEUE: 1st task =>", "Error reading file:", err);
    } else {
      console.log("I/O QUEUE: 1st task =>", "File content:", { data });

      // Add a microtask
      process.nextTick(() => {
        console.log("MICROTASK: after 1st I/O task");
      });
    }
  });
};
