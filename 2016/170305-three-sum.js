/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. //
//                                                                                                                                                             //
// Note: The solution set must not contain duplicate triplets.                                                                                                 //
//                                                                                                                                                             //
// For example, given array S = [-1, 0, 1, 2, -1, -4],                                                                                                         //
//                                                                                                                                                             //
// A solution set is:                                                                                                                                          //
// [                                                                                                                                                           //
//   [-1, 0, 1],                                                                                                                                               //
//   [-1, -1, 2]                                                                                                                                               //
// ]                                                                                                                                                           //
//                                                                                                                                                             //
//                                                                                                                                                             //
//                                                                                                                                                             //
// @param {number[]} nums                                                                                                                                      //
// @return {number[][]}                                                                                                                                        //
//                                                                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var threeSum = function (nums) {
  var ans = [],
    builder = [];
  var sub = function sub(nums) {
    if (builder.length === 3) {
      var sum = builder.reduce(function (a, b) {
        return a + b;
      });
      if (sum === 0) {
        ans.push(builder);
      }
      builder = [];
    } else {
      for (var i = 0; i < nums.length; i++) {
        var temp = nums.slice();
        builder.push(temp[i]);
        temp.splice(i, 1);
        sub(temp, builder);
      }
    }
  };
  sub(nums);
  console.log(45, '170305-three-sum.js', ans);
};

threeSum([-1, 0, 1, 2, -1, -4]);
