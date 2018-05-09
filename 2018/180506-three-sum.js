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

var threeSum = function(nums) {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  min = sortedNums.shift();
  max = sortedNums.pop();
  return threeSumHelper(nums, min, max);
};

function threeSumHelper(nums, min, max, soFar = [], ans = [], hash = {}) {
  if (soFar.length === 2) {
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      let currentTotal = soFar.reduce((a, b) => a + b, current);

      if (currentTotal === 0) {
        let possibleAns = [...soFar, current];
        possibleAns = possibleAns.sort((a, b) => a - b);
        if (!hash[possibleAns]) {
          hash[possibleAns] = possibleAns;
          ans.push(possibleAns);
        }
      }
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      callRecursion(current, i);
    }
  }

  function callRecursion(current, i) {
    soFar.push(current);
    nums.splice(i, 1);
    threeSumHelper(nums, min, max, [...soFar], ans, hash);
    nums.splice(i, 0, current);
    soFar.pop();
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
