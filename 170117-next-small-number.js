// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1, when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.

function nextSmaller(n) {
  let nArray = n.toString().split('');
  let ans = [];
  let sub = function (nums, combo) {
    if (combo.length === nArray.length) {
      ans.push(parseInt(combo.join('')));
    } else {
      for (let i = 0; i < nums.length; i++) {
        sub(nums.slice(0, i).concat(nums.slice(i + 1)), combo.concat(nums[i]));
      }
    }
  };
  sub(nArray, []);

  ans = ans.sort(function (a, b) {
    return b - a;
  }).filter(function (num) {
    return num.toString().length === nArray.length && n > num;
  });

  return ans[0] || -1;
}

nextSmaller(721);
