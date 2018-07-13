var topKFrequent = function(nums, k) {
  let frequencyCount = { 1: {} },
    numsCount = {},
    ans = [];

  for (var i = 0; i < nums.length; i++) {
    if (!numsCount[nums[i]]) {
      numsCount[nums[i]] = 1;
      frequencyCount[1][nums[i]] = true;
    } else {
      delete frequencyCount[numsCount[nums[i]]][nums[i]];
      numsCount[nums[i]]++;
      if (!frequencyCount[numsCount[nums[i]]]) {
        frequencyCount[numsCount[nums[i]]] = {};
      }
      frequencyCount[numsCount[nums[i]]][nums[i]] = true;
    }
  }
  let keys = Object.keys(frequencyCount).reverse();
  for (var j = 0; j < keys.length; j++) {
    for (var item in frequencyCount[keys[j]]) {
      if (ans.length < k) {
        ans.push(parseInt(item));
      } else {
        return ans;
      }
    }
  }
  return ans;
};
