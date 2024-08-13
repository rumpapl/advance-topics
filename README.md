## What is Libuv?

Libuv is a multi-platform library that handles asynchronous I/O operations in the Node.js runtime environment. It provides the underlying mechanism for Node.js's non-blocking I/O model, utilizing different queues to manage tasks with varying priorities.

### Queues Managed by Libuv

1. **Microtask Queue**
   - \`nextTick\`
   - Promise queue
2. **Timer Queue**
3. **I/O Queue**
4. **Check Queue** (\`setImmediate()\`)
5. **Close Queue**

## Event Loop

### What is a "Tick"?

A "tick" refers to one complete iteration of the event loop. During each tick, Node.js processes various types of operations, including timers, I/O callbacks, and microtasks, in specific phases.

### What Happens in a Cycle of the Event Loop (or Tick)?

**Steps:**

1. **Check Microtask Queue**: Execute all tasks in the microtask queue.
2. **Microtask Queue Priority**: The microtask queue is divided into two queues:
   - \`nextTick\` Queue (priority 1)
   - Promise Queue (priority 2)
3. **Check Timer Queue**: Execute the first executable task in the timer queue for the current moment.
4. **Return to Microtask Queue**: Execute all tasks in the microtask queue after running a timer task.
5. **Re-check Timer Queue**: If there are additional timer tasks ready to execute, repeat steps 3 and 4 until all tasks for the current moment are handled.
6. **Final Microtask Check**: Before moving to the I/O queue, run all tasks in the microtask queue.
7. **Continue with Other Queues**: The above behavior is repeated for each queue in the event loop.

### Analyzing Code Example

**Output Example:**

```bash
MICROTASK: nextTick() => No. 1
MICROTASK: nextTick() => No. 2
MICROTASK: Promise resolved => No. 1
MICROTASK: Promise resolved => No. 2
TIMER: with zero second
TIMER: with zero second
CHECK QUEUE: Running setImmediate task
I/O QUEUE: 1st task => File content: { data: 'test file reader.' }
MICROTASK: after 1st I/O task
I/O QUEUE: 2st task => Received data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
TIMER: with one second
```

**Findings:**

1. **Why did the Check Queue run before I/O Task 1?**

   - This occurred because, during the first tick, the I/O task was initiated but not completed. The event loop then moved on to the check queue and executed the \`setImmediate\` callback, which completed quickly, logging the output before the I/O task finished.

2. **Why did I/O Task 2 run before Timer 3?**
   - Each tick takes a very short time to complete. In this example, when the first I/O task finished, the event loop checked the timer queue. However, since the third timer was not ready at that specific moment, the queue was empty. As a result, the event loop moved on and executed I/O Task 2. When Timer 3 was ready, it was then executed.

## Sources

[A Complete Visual Guide to Understanding the Node.js Event Loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)
