import "allocator/tlsf";
import * as std from "./std";

declare function sayHello(): void;

declare namespace console {
  function logi(value: i32): void;
  function logf(value: f64): void;
  function logs(value: string): void;
}

function add2(x: i32, y: i32): i32 {
  return x + y;
}

console.logf(10);
console.logf(add2(10, 10));

export function add(x: i32, y: i32): i32 {
  return x + y;
}

export function myName(): string {
  const name = "Thomas";
  const lastName = " Binetruy-Pic";
  return name.concat(lastName).concat(" is my name ;)");
}

export function malloc(size: usize): usize {
  return memory.allocate(size);
}

export function mfree(ptr: usize): void {
  memory.free(ptr);
}

export function read(ptr: usize): string {
  let s = std.readString(ptr);
  let ss = std.split(s);
  let sss = ss[1];

  return sss;
}
