///////////////////////////////////////////////////////////////////////////////////////////////////////
// There are two sorted arrays nums1 and nums2 of size m and n respectively.                         //
//                                                                                                   //
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)). //
//                                                                                                   //
// Example 1:                                                                                        //
// nums1 = [1, 3]                                                                                    //
// nums2 = [2]                                                                                       //
// The median is 2.0                                                                                 //
//                                                                                                   //
// Example 2:                                                                                        //
// nums1 = [1, 2]                                                                                    //
// nums2 = [3, 4]                                                                                    //
// The median is (2 + 3)/2 = 2.5                                                                     //
//                                                                                                   //
// @param {number[]} nums1                                                                           //
// @param {number[]} nums2                                                                           //
// @return {number}                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////

var findMedianSortedArrays = function (nums1, nums2) {
  var combinedArray = [];
  while (nums1.length || nums2.length) {
    if (nums1[0] < nums2[0] || nums2[0] === undefined) {
      combinedArray.push(nums1.shift());
    } else if (nums1[0] > nums2[0] || nums1[0] === undefined) {
      combinedArray.push(nums2.shift());
    }
  }
  var middle = Math.floor(combinedArray.length / 2);
  return combinedArray.length % 2 === 0 ? (combinedArray[middle] + combinedArray[middle - 1]) / 2 : combinedArray[middle];
};

console.log(35, '170228-median.js', findMedianSortedArrays([1, 3], [2, 4]));
