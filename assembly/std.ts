export function split(s: string): Array<string> {
  let l = s.length;
  const a: Array<string> = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < l; i++) {
    let c = s.charCodeAt(i);
    if (c === 32) {
      a.push(s.substring(start, end));
      start = end + 1;
    }
    end += 1;
  }
  a.push(s.substring(start, end));
  return a;
}

export function readString(ptr: usize): string {
  let l: u8 = load<u8>(ptr);
  let s: string = "";

  for (let i = ptr + 4; i < ptr + l * 2 + 4; i++) {
    let c = load<u8>(i);
    s += String.fromCharCode(c);
    i++;
  }

  return s;
}
