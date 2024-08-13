const {
  NEXT_TICK_1,
  NEXT_TICK_2,
  PROMISE_1,
  PROMISE_2,
} = require("./microtask");

const { IMMEDIATE_TASK } = require("./ckeck");

const { TIMER_ZERO_SEC, TIMER_ONE_SEC } = require("./timer");
const { IO_TASK_1, IO_TASK_2 } = require("./io");

console.log("-----------------------");
console.log("START of EVENT-LOOP");
console.log("-----------------------");

IMMEDIATE_TASK();
TIMER_ONE_SEC();
IO_TASK_2();
TIMER_ZERO_SEC();
NEXT_TICK_1();
NEXT_TICK_2();
IO_TASK_1();
PROMISE_1();
PROMISE_2();
TIMER_ZERO_SEC();

// console.log("-----------------------");
// console.log("END of EVENT-LOOP");
