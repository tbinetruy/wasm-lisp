import * as index from "../assembly/std";

test("index", () => {
  expect(index.trim("foo bar")).toEqual(["foo", "bar"]);
});
