module.exports.NEXT_TICK_1 = () => {
  process.nextTick(() => {
    console.log("MICROTASK: nextTick() => No. 1");
  });
};
