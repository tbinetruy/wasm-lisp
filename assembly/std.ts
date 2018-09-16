export function trim(s: string): Array<string> {
  return ["foo", "bar"];
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
