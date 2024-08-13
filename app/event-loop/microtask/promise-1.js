module.exports.PROMISE_1 = () => {
  Promise.resolve().then(() => {
    console.log("MICROTASK: Promise resolved => No. 1");
  });
};
