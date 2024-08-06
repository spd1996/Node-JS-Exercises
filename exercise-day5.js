// Event loop, call stack , task queue, micro task queue

// +---------------------+         +---------------------+
// |     Call Stack      |         |    Event Loop       |
// |                     |         |                     |
// | +-----------------+ |         | +-----------------+ |
// | |                 | |         | |                 | |
// | |    Function     | |         | |                 | |
// | |     Calls       | |         | |                 | |
// | |                 | |         | |                 | |
// | +-----------------+ |         | |                 | |
// | |                 | |         | |                 | |
// | |                 | |         | |                 | |
// | |                 | |         | |                 | |
// | +-----------------+ |         | |                 | |
// +---------------------+         | |                 | |
//                                 | +-----------------+ |
//                                 +---------------------+

//                                 +---------------------+
//                                 |   Microtask Queue   |
//                                 |                     |
//                                 | +-----------------+ |
//                                 | |  Microtasks     | |
//                                 | +-----------------+ |
//                                 +---------------------+

//                                 +---------------------+
//                                 |     Task Queue      |
//                                 |                     |
//                                 | +-----------------+ |
//                                 | |    Tasks        | |
//                                 | +-----------------+ |
//                                 +---------------------+


function logA(){console.log("A")}
function logB(){console.log("B")}
function logC(){console.log("C")}
function logD(){console.log("D")}


logA()
setTimeout(logB, 0)
Promise.resolve().then(logC)
logD()

// Let's go through the execution of the code step by step:

// logA(): This function is called immediately, so the output from logA will be logged first.

// setTimeout(logB, 0): This sets up a timer with a delay of 0 milliseconds. Although the delay is 0, the function logB is added to the task queue and will only execute after the current call stack is empty and all microtasks are completed.

// Promise.resolve().then(logC): This creates a resolved promise, and logC is added to the microtask queue to be executed after the current stack finishes.

// logD(): This function is called immediately, so the output from logD will be logged next.

// The order of execution will be:

// logA() - Output from calling logA().
// logD() - Output from calling logD().
// logC() - logC is called as a microtask after the main script.
// logB() - logB is called from the task queue after the microtasks.
// So, the output will be:
// A
// D
// C
// B


logA()
setTimeout(logB, 0)
Promise.resolve().then(logC())
logD()


// Let's break down the code to understand the order of execution:

// logA(): This function is called immediately, so its output will be logged first.

// setTimeout(logB, 0): This sets up a timer with a delay of 0 milliseconds. However, the actual execution of logB will be placed on the task queue and will be executed after the current stack and microtasks are cleared.

// Promise.resolve().then(logC()): The function logC() is called immediately due to the parentheses, so its output will be logged right away. The then block is part of a microtask, but since logC() has already been called, there's no additional effect.

// logD(): This function is called immediately, so its output will be logged next.

// Given this order, the output will be:

// logA() - Output from calling logA().
// logC() - Output from calling logC().
// logD() - Output from calling logD().
// logB() - Output from calling logB() after the call stack is cleared.
// So, the output will be:

// A
// C
// D
// B


// Call Stack: This is where function calls are added and removed as they are executed. 
// Functions on the stack are executed immediately.
// Event Loop: This continuously checks the call stack and the queues. 
// If the call stack is empty, it pushes the first task from the microtask queue or task queue to the call stack.
// Microtask Queue: This queue holds microtasks, such as resolved promises and process.nextTick (in Node.js). 
// These tasks have higher priority and are executed before tasks in the task queue.
// Task Queue: This queue holds tasks, such as setTimeout, setInterval, and I/O operations. 
// These tasks are executed after the call stack is empty and the microtask queue is cleared.
