var binaryGap = function(num) {
  let numString = Number(num).toString(2);
  let ans = 0,
    left = -1,
    right = -1;
  for (let i = 0; i < numString.length; i++) {
    if (numString[i] === '1') {
      if (left < 0) {
        left = i;
      } else {
        ans = i - left > ans ? i - left : ans;
        left = i;
      }
    }
  }
  return ans;
};

binaryGap(6);
binaryGap(8);
binaryGap(22);
binaryGap(5);
