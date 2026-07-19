const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("projectRun", () => {
  console.log("📢 Custom Event Triggered Successfully!");
});

function triggerEvent() {
  eventEmitter.emit("projectRun");
}

module.exports = triggerEvent;