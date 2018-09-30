const app = require("./index.js");
const readline = require("readline");
const helpers = require("./helpers.js");

const ptr = helpers.createString(app, "* 1 2 3 4 5 6");
helpers.logString(app.memory.buffer, ptr);
console.log("app result => ", app.read(ptr), ptr);
console.log("app result bis => ", app.read(ptr), ptr);

const ptr2 = helpers.createString(app, "* 1 2 3 4 5 6");
console.log("app result => ", app.read(ptr2));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(">> ", answer => {
  const ptr = helpers.createString(app, "* 1 2 3 4");
  console.log("foo", app.read(ptr));

  rl.close();
});
