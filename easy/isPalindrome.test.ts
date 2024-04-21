import { isPalindrome } from "./isPalindrome";

describe("Palindrome Number", () => {
  test("Should return valid when is polindrome and positive number", () => {
    expect(isPalindrome(121)).toBe(true);
  });
  test("Should return invalid when is polindrome and negative number", () => {
    expect(isPalindrome(-121)).toBe(false);
  });
  test("Should return valid when number has one digit", () => {
    const inputs = Array.from({ length: 9 }).map((_, index) => index);
    inputs.forEach((input) => expect(isPalindrome(input)).toBe(true));
  });
  test("Should return invalid when number has one digit and is negative", () => {
    const inputs = Array.from({ length: 8 }).map((_, index) => -index - 1);
    inputs.forEach((input) => expect(isPalindrome(input)).toBe(false));
  });
  test("Should return invalid when number isn't simetric", () => {
    const inputs = [10, 123];
    inputs.forEach((input) => expect(isPalindrome(input)).toBe(false));
  });
});
