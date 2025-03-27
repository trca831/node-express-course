const EventEmitter = require("events");
const emitter = new EventEmitter();

// Event handler 1: Handles 'timer' event and logs the message
emitter.on("timer", (msg) => {
  console.log("Timer event received:", msg);
});

// Event handler 2: Handles 'greeting' event and logs the message
emitter.on("greeting", (name) => {
  console.log(`Hello, ${name}! Welcome to the event emitter.`);
});

// Event handler 3: Handles 'dynamic' event that emits another event
emitter.on("dynamic", (msg) => {
  console.log("Dynamic event received:", msg);
  // Emitting another event inside the handler
  emitter.emit("greeting", "Alice");
});

// Emitting events
setTimeout(() => {
  emitter.emit("timer", "Hello from the timer!");
}, 2000);

setTimeout(() => {
  emitter.emit("greeting", "Bob");
}, 3000);

// Trigger the 'dynamic' event, which will emit another event
setTimeout(() => {
  emitter.emit("dynamic", "This is a dynamic event!");
}, 4000);

// Async/await approach with events
const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("waitForMe", (msg) => resolve(msg)); // Listen for 'waitForMe' event
  });
};

const doWait = async () => {
  const msg = await waitForEvent(); // Wait until 'waitForMe' event is emitted
  console.log("We got an event! Here it is:", msg);
};

setTimeout(() => {
  emitter.emit("waitForMe", "This is the message after waiting.");
}, 5000);

doWait(); 