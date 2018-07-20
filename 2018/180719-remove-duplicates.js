var removeDuplicates = function(nums) {
  let p1 = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[p1] !== nums[i]) {
      nums[p1 + 1] = nums[i];
      p1++;
    }
  }
  nums.length = p1 + 1;
  return nums.length;
};

removeDuplicates([1, 1, 2, 2, 3]);
