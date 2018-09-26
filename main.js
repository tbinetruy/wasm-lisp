const app = require("./index.js");
const helpers = require("./helpers.js");

const ptr = helpers.createString(app, "* 1 2 3 4 5 6");
// logString(memoryBuffer, app.read(ptr));
console.log("app result => ", app.read(ptr));

console.log("done");
