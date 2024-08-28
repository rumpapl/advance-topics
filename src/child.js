const childName = process.argv[2];

process.on("message", (message) => {
  if (message === "done") {
    process.send({ done: true });
    return;
  }
  const result = message ** 2;
  process.send({ childName, number: message, result });
});
