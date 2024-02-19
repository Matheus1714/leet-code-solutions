export function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const ai = nums[i];
    for (let j = i + 1; j < n; j++) {
      const aj = nums[j];
      if (ai + aj === target) {
        return [i, j];
      }
    }
  }
  throw new Error("No numbers were found in witch the sum is the target");
}
