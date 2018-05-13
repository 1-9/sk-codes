var subsets = function(nums, current = [], ans = []) {
  if (!nums.length) {
    ans.push(current);
  } else {
    let last = nums.pop();
    subsets(nums, current.concat(last), ans);
    subsets(nums, current, ans);
    nums.push(last);
  }
  return ans;
};

console.log(subsets([1, 2, 3]));
console.log(subsets(['a', 'b', 'c']));
