/**
 * @Date 2020-07-24 17:57:43
 * @Remark TwoSum
 */

function twoSum(nums: number[], target: number): number[] {
  const result = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result[0] = i;
        result[1] = j;
      }
    }
  }

  return result;
}

export default twoSum;
