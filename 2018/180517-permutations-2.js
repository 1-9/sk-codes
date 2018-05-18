// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

var permuteUnique = function(nums, temp = [], ans = [], hash = {}) {
  if (!nums.length) {
    if (!hash[temp]) {
      ans.push(temp);
    }
    hash[temp] = true;
  } else {
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      nums.splice(i, 1);
      temp.push(current);
      permuteUnique(nums, [...temp], ans, hash);
      temp.pop();
      nums.splice(i, 0, current);
    }
  }
  return ans;
};

console.log(permuteUnique([1, 1, 2]));
