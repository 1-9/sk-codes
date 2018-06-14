/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {};

findRedundantConnection([
  [9, 10],
  [5, 8],
  [2, 6],
  [1, 5],
  [3, 8],
  [4, 9],
  [8, 10],
  [4, 10],
  [6, 8],
  [7, 9]
]);
findRedundantConnection([[1, 2], [1, 3], [2, 3]]);
findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]);
findRedundantConnection([[1, 3], [3, 4], [1, 5], [3, 5], [2, 3]]);
findRedundantConnection([[1, 4], [3, 4], [1, 3], [1, 2], [4, 5]]);
