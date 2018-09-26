function utf8ToString(heap, ptr) {
  let s = ""; // initial new string
  let l = heap[ptr]; // get encoded string length (first byte)
  ptr += 4; // skip the next 32 bytes to bring pointer to beginning of string
  /*
      Iterate through string with counter starting at p.
      Because AS encodes string in UTF16 rather than UTF8, each string character
      is composed of its char code and \00. We want to skip over \00 and therefore
      increase our counter by 2 every loop iteration and stop iterating when address of
      last char was reach: p + l * 2.
      - p is a pointer to the first character of our string
      - l is the length of our string, but needs to be timed by 2 to account for \00 between each chars
    */
  for (let i = ptr; i < ptr + l * 2; i++) {
    s += String.fromCharCode(heap[i]);
    i++; // increment counter by 1 a second time during the iteration to skip over \00 chars
  }
  return s;
}

const encodeString = _str => {
  const str = [_str.length, 0, 0, 0];
  for (let i = 0; i < _str.length; i++) {
    str.push(_str.charCodeAt(i));
    str.push(0);
  }
  str.pop();
  return str;
};

const createString = (app, s) => {
  const memoryBuffer = new Uint8Array(app.memory.buffer);

  // encoding matches how AS encodes strs (see utf8ToString)
  const ptr = app.malloc(s.length * 2 + 4);
  memoryBuffer.set(encodeString(s), ptr);

  return ptr;
};

const logString = (m, ptr) => console.log(utf8ToString(m, ptr));

module.exports = {createString, encodeString, logString, utf8ToString};
