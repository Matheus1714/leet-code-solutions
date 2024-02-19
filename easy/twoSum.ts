export function twoSum(nums: number[], target: number): number[] {
  const n = nums.length;
  const mapNumbers = new Map();
  for (let i = 0; i < n; i++) {
    const difference = target - nums[i];
    if (mapNumbers.has(difference)) {
      return [mapNumbers.get(difference), i];
    }
    mapNumbers.set(nums[i], i);
  }
  throw new Error("No numbers were found in witch the sum is the target");
}
