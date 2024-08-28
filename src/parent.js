const { fork } = require("child_process");
const path = require("path");

const childProcesses = [];
for (let index = 0; index < 3; index++) {
  const child = fork(path.join(__dirname, "/child.js"), [`Child_${index + 1}`]);
  childProcesses.push(child);
}

const sendNumbers = () => {
  let number = 1;
  const setIntervalId = setInterval(() => {
    if (number > 100) {
      clearInterval(setIntervalId);
      childProcesses.forEach((child) => child.send("done"));
      return;
    }

    childIndex = (number - 1) % childProcesses.length;
    childProcesses[childIndex].send(number);

    number++;
  }, 5);

  // NOTE: result may not appaers serially couse of using synchronos mannar
  // while (true) {
  //   if (number > 100) {
  //     childProcesses.forEach((child) => child.send("done"));
  //     break;
  //   }

  //   childIndex = (number - 1) % childProcesses.length;
  //   childProcesses[childIndex].send(number);

  //   number++;
  // }
};

childProcesses.forEach((child) => {
  child.on("message", (message) => {
    if (message.done) {
      child.kill();
    } else {
      const { childName, number, result } = message;
      console.log(
        `Process: ${childName} => Number: ${number} => Result: ${result} `
      );
    }
  });
});

sendNumbers();
