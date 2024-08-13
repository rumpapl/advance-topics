module.exports.NEXT_TICK_2 = () => {
  process.nextTick(() => {
    console.log("MICROTASK: nextTick() => No. 2");
  });
};
