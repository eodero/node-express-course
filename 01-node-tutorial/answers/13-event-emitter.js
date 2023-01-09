//import the event
const EventEmitter = require("events");

//custom event emmitter
const customEmitter = new EventEmitter();

//some of the methods in event object
// - on - listen for an event
// - emit - emits an event

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

//order matters, we first listen for an event and then emit
// -1 emitter.on
// -2 emitter.emit

customEmitter.emit("response", "john", 34);
