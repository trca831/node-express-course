const EventEmitter = require('events');
const chatEmitter = new EventEmitter();

chatEmitter.on('message', (sender, message) => {
  console.log(`[${sender}]: ${message}`);
});

chatEmitter.on('userJoined', (username) => {
  console.log(`${username} has joined the chat.`);
});

chatEmitter.on('userLeft', (username) => {
  console.log(`${username} has left the chat.`);
});

chatEmitter.emit('userJoined', 'Tracy');
chatEmitter.emit('userJoined', 'Isaac');

chatEmitter.emit('message', 'Tracy', 'Hello, everyone!');
chatEmitter.emit('message', 'Isaac', 'Hey, Tracy!');

chatEmitter.emit('userLeft', 'Tracy');

chatEmitter.emit('message', 'Isaac', 'Goodbye, Tracy!');