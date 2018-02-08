// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// For example,
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

var trap = function(height) {
  let ans = 0;
  while (height.length > 1) {
    height = removeZeros(height);
    height = height.map(val => {
      if (val > 0) {
        return --val;
      } else {
        ans++;
        return 0;
      }
    });
  }
  return ans;
};

function removeZeros(height) {
  for (var i = 0; i < height.length; i++) {
    if (height[i] > 0) {
      break;
    }
  }
  for (var j = height.length; j > 0; j--) {
    console.log(49, j);
    if (height[j] > 0) {
      break;
    }
  }

  if (j > -1) {
    height.splice(j + 1);
  }
  if (i > -1) {
    height.splice(0, i);
  }
  return height;
}

// trap([4, 2, 3]); // 1
