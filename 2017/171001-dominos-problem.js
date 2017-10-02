// Task description

// John found six dominoes. A domino is a rectangular tile with a line dividing its face into two square halves. Each half is marked with a number of spots. John wants to build a three-stage pyramid from these dominoes. The first level should consist of three dominoes, the second level of two dominoes and the highest of one domino. The levels are arranged in such a way that the peak of the pyramid is at the center: that is, each level is positioned over the center of the level below it. There is also an additional condition. The number of spots on each domino half should be the same as the number of spots on the half positioned beneath it. Note that this does not apply to neighboring dominoes on the same level.

// Is it possible to build a pyramid from these dominoes, as described above? Dominoes can be freely rearranged. We also assume that dominoes can be rotated (that is, the piece [X, Y] can be treated as [X, Y] or [Y, X], where X denotes the number of spots in the first half-domino and Y denotes the number of spots in the second half-domino).

// Write a function:

// function solution(A);

// that, given an array A consisting of twelve integers (the first and the second integer describe the first domino, the third and the fourth integer describe the second domino, etc.), returns the string "YES", if it is possible to build a correct pyramid from these dominoes or "NO" otherwise.

// For example, given:

// A = [4, 3, 3, 4, 1, 2, 2, 3, 6, 5, 4, 5]
// the function should return "YES". John found the following dominoes: [4, 3], [3, 4], [1, 2], [2, 3], [6, 5], [4, 5]. There are several ways to build the pyramid. For instance, John can rotate first and fifth domino and as a result gets: [3, 4], [3, 4], [1, 2], [2, 3], [5, 6], [4, 5]. Next, he can place the third, the first and the fifth domino at the first level (in this order), the fourth and the sixth domino at the second level (also in this order) and the second domino at the highest level. The result will be:

// Assume that:

// array A contains twelve integers;
// each element of array A is an integer within the range [1..12].
//   In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

// Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
//   Custom test casesformat: [4, 3, 3, 4, 1, 2, 2, 3, 6, 5, 4, 5]
// 0/10

// Solution

// 1
// 2
// 3
// 4
// 5
// 6
// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

function solution(A) {
  let count = 0,
    ans = "NO";
  function sub(arr) {
    if (count <= 10) {
      return ans;
    } else {
      for (let i = 0; i < ans.length; i += 2) {
        console.log(ans[i]);
        count++;
        sub(A);
      }
    }
  }
  sub(A);
}

let test = [4, 3, 3, 4, 1, 2, 2, 3, 6, 5, 4, 5];
solution(test);
