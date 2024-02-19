import { longestCommonPrefix } from "./longestCommonPrefix";

describe("Longest Common Prefix", () => {
  test("Should return empty string with no common prefix", () => {
    const words = ["dog", "racecar", "car"];
    const result = "";
    expect(longestCommonPrefix(words)).toEqual(result);
  });
  test("Should return a common prefix with existent string", () => {
    const words = ["flower", "flow", "flight"];
    const result = "fl";
    expect(longestCommonPrefix(words)).toEqual(result);
  });
  test("Should return a complete string with all elements equal", () => {
    const words = ["flower", "flower", "flower"];
    const result = "flower";
    expect(longestCommonPrefix(words)).toEqual(result);
  });
});
