let threeSumClosest = function(nums, target) {
  let minimum = Infinity,
      ans;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
        right = nums.length - 1;

    while (true) {
      let currentSum = calculateSum(nums[i], nums[left], nums[right]),
          difference = Math.abs(currentSum - target);
      if (currentSum === target) {
        return target;
      } else if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      }
      if (difference < minimum) {
        minimum = difference;
        ans = currentSum;
      }
      if (left >= right || i >= left) {
        break;
      }
    }
  }
  return ans;
};

const calculateSum = (a, b, c) => a + b + c;
