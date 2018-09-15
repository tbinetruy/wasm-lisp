const fs = require("fs");
const compiled = new WebAssembly.Module(
  fs.readFileSync(__dirname + "/build/optimized.wasm"),
);

const imports = {
  env: {
    abort(msg, file, line, column) {
      console.error("abort called at main.ts:" + line + ":" + column);
    },
  },
  console: {
    logi(value) {
      console.log("logi: " + value);
    },
    logf(value) {
      console.log("logf: " + value);
    },
  },
};

module.exports = new WebAssembly.Instance(compiled, imports).exports;
