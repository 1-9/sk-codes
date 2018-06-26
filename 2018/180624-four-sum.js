/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let ans = [],
    soFar = {};
  nums.sort((a, b) => a - b);
  function sub(nums, current = [], level = 0) {
    if (current.length === 4) {
      if (sum(current) === target && !soFar[current]) {
        soFar[current] = true;
        ans.push(current);
      }
    } else {
      for (let i = level; i < nums.length; i++) {
        let val = nums[i];
        current.push(val);
        sub(nums, [...current], ++level);
        current.pop();
      }
    }
  }
  sub(nums);
  console.log(ans);
  return ans;
};

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

fourSum([1, 0, -1, 0, -2, 2], 0);
fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);
fourSum(
  [
    -491,
    -487,
    -445,
    -436,
    -435,
    -429,
    -398,
    -385,
    -378,
    -370,
    -367,
    -353,
    -344,
    -325,
    -284,
    -279,
    -269,
    -262,
    -189,
    -182,
    -164,
    -152,
    -123,
    -118,
    -110,
    -64,
    -55,
    -48,
    -45,
    9,
    14,
    17,
    47,
    54,
    64,
    64,
    70,
    94,
    114,
    144,
    161,
    171,
    188,
    194,
    205,
    241,
    271,
    284,
    312,
    341,
    363,
    376,
    407,
    410,
    413,
    441,
    442,
    455,
    476,
    492
  ],
  -1529
);
