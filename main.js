var index = require("./index.js");
console.log(index.add(1, 2));

function utf8ToString(h, p) {
  let s = ""; // initial new string
  let l = h[p]; // get encoded string length (first byte)
  p += 4; // skip the next 32 bytes to bring pointer to beginning of string
  /*
      Iterate through string with counter starting at p.
      Because AS encodes string in UTF16 rather than UTF8, each string character
      is composed of its char code and \00. We want to skip over \00 and therefore
      increase our counter by 2 every loop iteration and stop iterating when address of
      last char was reach: p + l * 2.
      - p is a pointer to the first character of our string
      - l is the length of our string, but needs to be timed by 2 to account for \00 between each chars
    */
  for (let i = p; i < p + l * 2; i++) {
    s += String.fromCharCode(h[i]);
    i++; // increment counter by 1 a second time during the iteration to skip over \00 chars
  }
  return s;
}

console.log(utf8ToString(new Uint8Array(index.memory.buffer), index.myName()));
console.log("done");
