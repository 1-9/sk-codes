// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Note:
// The solution set must not contain duplicate triplets.
// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums, current = [], ans = [], level = 0, hash = {}) {
  if (current.length === 3) {
    let sortCurrent = current.sort((a, b) => a - b);
    let currentTotal = current.reduce((a, b) => a + b, 0);
    if (!currentTotal && !hash[sortCurrent]) {
      ans.push(sortCurrent);
      hash[sortCurrent] = true;
    }
  } else {
    for (let i = level; i < nums.length; i++) {
      current.push(nums[i]);
      threeSum(nums, [...current], ans, ++level, hash);
      current.pop();
    }
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
