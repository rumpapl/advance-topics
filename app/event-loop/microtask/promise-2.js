module.exports.PROMISE_2 = () => {
  Promise.resolve().then(() => {
    console.log("MICROTASK: Promise resolved => No. 2");
  });
};
