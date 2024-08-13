module.exports.IMMEDIATE_TASK = () => {
  setImmediate(() => {
    console.log("CHECK QUEUE: Running setImmediate task");
  });
};
