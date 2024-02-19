import { romanToInt } from "./RomanToInt";

describe("Roman to Integer", () => {
  test("Should return a number using only I roman number", () => {
    const roman = "III";
    const result = 3;
    expect(romanToInt(roman)).toEqual(result);
  });
  test("Should return a number using only I, V and L roman numbers", () => {
    const roman = "LVIII";
    const result = 58;
    expect(romanToInt(roman)).toEqual(result);
  });
  test("Should return a number using several roman numbers", () => {
    const roman = "MCMXCIV";
    const result = 1994;
    expect(romanToInt(roman)).toEqual(result);
  });
});
