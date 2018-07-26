var checkPossibility = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
      if (i === 0) {
        nums[i] = nums[i + 1];
      } else if (i === nums.length - 2) {
        nums[i + 1] = nums[i];
      } else if (nums[i - 1] < nums[i + 1]) {
        nums[i] = nums[i + 1];
      } else if (nums[i - 1] > nums[i + 1]) {
        nums[i + 1] = Math.max(nums[i - 1], nums[i], nums[i + 1]);
      }
      i--;
      if (count > 1) {
        return false;
      }
    }
  }
  return true;
};

checkPossibility([3, 2, 3]);
checkPossibility([3, 4, 2, 3]);
checkPossibility([2, 3, 3, 2, 4]);
checkPossibility([-1, 4, 2, 3]);
checkPossibility([3, 3, 2, 2]);
checkPossibility([1, 2, 4, 5, 3]);
checkPossibility([1, 3, 4, 2, 5]);
