import { validParentheses } from "./validParentheses";

describe("Valid Parentheses", () => {
  test("Should return valid list with open close same brackets", () => {
    const inputs = ["()", "[]", "{}"];
    const output = true;
    inputs.forEach((input) => expect(validParentheses(input)).toEqual(output));
  });
  test("Should return invalid list with close open same brackets", () => {
    const inputs = [")(", "][", "}{"];
    const output = false;
    inputs.forEach((input) => expect(validParentheses(input)).toEqual(output));
  });
  test("Should return invalid list with only one bracket", () => {
    const inputs = [")", "(", "[", "]", "{", "}"];
    const output = false;
    inputs.forEach((input) => expect(validParentheses(input)).toEqual(output));
  });
  test("Should return valid  with differents brackets", () => {
    const inputs = ["()[]{}", "[](){}", "{}[]()"];
    const output = true;
    inputs.forEach((input) => expect(validParentheses(input)).toEqual(output));
  });
  test("Should return invalid with differents brackets open close", () => {
    const inputs = ["(}", "[)", "{]"];
    const output = false;
    inputs.forEach((input) => expect(validParentheses(input)).toEqual(output));
  });
  test("Should return valid with differents brackets open close", () => {
    const inputs = ["(()()()[])[{()()}{}{}()[()]]"];
    const output = true;
    inputs.forEach((input) => expect(validParentheses(input)).toEqual(output));
  });
});
