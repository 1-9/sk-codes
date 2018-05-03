// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var start = 0,
    end = height.length - 1,
    maxArea = 0,
    currentMaxArea = 0;

  while (start < end) {
    currentMaxArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = currentMaxArea > maxArea ? currentMaxArea : maxArea;
    if (height[end] > height[start]) {
      start++;
    } else {
      end--;
    }
  }
  console.log(maxArea);
  return maxArea;
};

maxArea([1, 1]); // 1
maxArea([0, 2]); // 0
maxArea([1, 2, 1]); // 2
maxArea([1, 2, 4, 3]); // 4
