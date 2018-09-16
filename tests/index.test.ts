import * as index from "../assembly/std";

test("index", () => {
  expect(index.split("")).toEqual([""]);
  expect(index.split("foo")).toEqual(["foo"]);
  expect(index.split("foo bar")).toEqual(["foo", "bar"]);
  expect(index.split("foo bar baa")).toEqual(["foo", "bar", "baa"]);
});
