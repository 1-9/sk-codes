// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let lastValue,
    ans,
    lastValue2,
    evenLength = nums1.length + nums2.length,
    center = Math.round((nums1.length + nums2.length) / 2),
    i = 0,
    j = 0;

  while (true) {
    if (nums2[0] !== undefined && nums1[0] !== undefined) {
      if (nums1[0] === nums2[0] || nums1[0] < nums2[0]) {
        i++;
        lastValue = nums1[0];
        lastValue2 = nums1[1] < nums2[0] ? nums1[1] : nums2[0];
        nums1.shift();
      } else if (nums2[0] < nums1[0]) {
        j++;
        lastValue2 = nums2[1] < nums1[0] ? nums2[1] : nums1[0];
        lastValue = nums2[0];
        nums2.shift();
      }
    } else if (nums1[0]) {
      i++;
      lastValue2 = nums1[1];
      lastValue = nums1[0];
      nums1.shift();
    } else if (nums2[0]) {
      j++;
      lastValue2 = nums2[1];
      lastValue = nums2[0];
      nums2.shift();
    }
    if (checkAns()) {
      break;
    }
  }
  function checkAns() {
    if (i + j === center) {
      if (evenLength % 2 === 0) {
        ans = (lastValue + lastValue2) / 2;
      } else {
        ans = lastValue;
      }
      return true;
    }
  }
  return ans;
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(
  findMedianSortedArrays(
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    [0, 6]
  )
);
