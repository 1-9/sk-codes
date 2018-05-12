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

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  return threeSumHelper(nums);
}

function threeSumHelper(nums, ans = [], current = [], level = 0, hash = {}) {
  if (current.length === 3) {
    if (!hash[current] && current.reduce((a, b) => a + b, 0) === 0) {
      hash[current] = true;
      ans.push(current);
    }
  } else {
    iterateHelper();
  }
  function iterateHelper() {
    for (let i = level; i < nums.length; i++) {
      let temp = nums[i];
      current.push(temp);
      threeSumHelper(nums, ans, [...current], ++level, hash);
      current.pop();
    }
  }
  return ans;
}

console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([1, 0, 1]));
console.log(threeSum([0, 1, -1, -1]));
console.log(threeSum([1, 1, -2]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
console.log(
  threeSum([
    -11,
    -3,
    -6,
    12,
    -15,
    -13,
    -7,
    -3,
    13,
    -2,
    -10,
    3,
    12,
    -12,
    6,
    -6,
    12,
    9,
    -2,
    -12,
    14,
    11,
    -4,
    11,
    -8,
    8,
    0,
    -12,
    4,
    -5,
    10,
    8,
    7,
    11,
    -3,
    7,
    5,
    -3,
    -11,
    3,
    11,
    -13,
    14,
    8,
    12,
    5,
    -12,
    10,
    -8,
    -7,
    5,
    -9,
    -11,
    -14,
    9,
    -12,
    1,
    -6,
    -8,
    -10,
    4,
    9,
    6,
    -3,
    -3,
    -12,
    11,
    9,
    1,
    8,
    -10,
    -3,
    2,
    -11,
    -10,
    -1,
    1,
    -15,
    -6,
    8,
    -7,
    6,
    6,
    -10,
    7,
    0,
    -7,
    -7,
    9,
    -8,
    -9,
    -9,
    -14,
    12,
    -5,
    -10,
    -15,
    -9,
    -15,
    -7,
    6,
    -10,
    5,
    -7,
    -14,
    3,
    8,
    2,
    3,
    9,
    -12,
    4,
    1,
    9,
    1,
    -15,
    -13,
    9,
    -14,
    11,
    9
  ])
);
