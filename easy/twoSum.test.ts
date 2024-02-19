import { twoSum } from "./twoSum";

describe("Two Sum", () => {
  test("Should return valid indexs with array with length 2", () => {
    const nums = [3, 3];
    const target = 6;
    const result = [0, 1];
    expect(twoSum(nums, target)).toEqual(result);
  });
  test("Should return valid indexs with array with length 3", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = [1, 2];
    expect(twoSum(nums, target)).toEqual(result);
  });
  test("Should return valid indexs with array with length 4", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = [0, 1];
    expect(twoSum(nums, target)).toEqual(result);
  });
  test("Should return error with no numbers in witch the sum is the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 32;
    expect(() => twoSum(nums, target)).toThrow(
      Error("No numbers were found in witch the sum is the target"),
    );
  });
});
