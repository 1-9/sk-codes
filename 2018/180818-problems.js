var findLHS = function(nums) {
  let hash = {},
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 0;
    }
    hash[nums[i]]++;
    if (hash[nums[i]] + hash[nums[i] - 1] > ans) {
      ans = hash[nums[i]] + hash[nums[i] - 1];
    }
    if (hash[nums[i]] + hash[nums[i] + 1] > ans) {
      ans = hash[nums[i]] + hash[nums[i] + 1];
    }
  }
  return ans;
};

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);

var minDepth = function(node) {
  let ans = Infinity;

  function sub(node, level = 1) {
    if (node) {
      minDepth(node.left, ++level);
      minDepth(node.right, ++level);
    }
    if (node && node.left === null && node.right === null) {
      console.log(node.val, level);
      ans = ans > level ? level : ans;
    }
  }
  sub(node);
  return ans;
};

[][0][(1, 2, 3, 4, null, null, 5)];
