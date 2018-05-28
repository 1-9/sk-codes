/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let ans = 0;
  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      if (helper(grid, i, j, grid[i][j] + grid[i][j + 1] + grid[i][j + 2])) {
        ans++;
      }
    }
  }
  return ans;
};

function helper(arr, i, j, sum) {
  let ans = true;
}

let grid = [
  [1, 4, 3, 8, 4],
  [1, 19, 15, 1, 9],
  [1, 9, 5, 1, 9],
  [1, 2, 7, 6, 2],
  [1, 2, 7, 6, 2]
];

numMagicSquaresInside(grid);
