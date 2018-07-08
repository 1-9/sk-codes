/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let ans = new Array(A[0].length).fill().map(v => []);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      ans[j].push(A[i][j]);
    }
  }
  return ans;
};

transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
transpose([[1, 2, 3], [4, 5, 6]]);
