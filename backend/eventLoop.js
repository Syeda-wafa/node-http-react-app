function runEventLoop() {
  console.log("========== Event Loop Demo ==========");

  console.log("1. Start");

  setTimeout(() => {
    console.log("2. setTimeout");
  }, 0);

  setImmediate(() => {
    console.log("3. setImmediate");
  });

  process.nextTick(() => {
    console.log("4. process.nextTick");
  });

  console.log("5. End");

  console.log("=====================================");
}

module.exports = runEventLoop;