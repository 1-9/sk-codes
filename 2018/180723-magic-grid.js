var numMagicSquaresInside = function(grid) {
  let gridCount = 0,
    nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid.length; column++) {
      let current = grid[row][column];
      if (current === 5) {
        let north = grid[row - 1] && grid[row - 1][column],
          south = grid[row + 1] && grid[row + 1][column],
          east = grid[row][column + 1],
          west = grid[row][column - 1],
          ne = grid[row - 1] && grid[row - 1][column + 1],
          se = grid[row + 1] && grid[row + 1][column + 1],
          nw = grid[row - 1] && grid[row - 1][column - 1],
          sw = grid[row + 1] && grid[row + 1][column - 1];

        let allNums =
          nums.has(north) &&
          nums.has(south) &&
          nums.has(east) &&
          nums.has(west) &&
          nums.has(ne) &&
          nums.has(se) &&
          nums.has(nw) &&
          nums.has(ne);

        let r1 = nw + north + ne,
          r2 = west + current + east,
          r3 = sw + south + se,
          c1 = nw + west + sw,
          c2 = north + current + south,
          c3 = ne + east + se,
          d1 = nw + current + se,
          d2 = ne + current + sw;

        if (
          r1 === 15 &&
          r2 === 15 &&
          r3 === 15 &&
          c1 === 15 &&
          c2 === 15 &&
          c3 === 15 &&
          d1 === 15 &&
          d2 === 15 &&
          allNums
        ) {
          gridCount++;
        }
      }
    }
  }
  return gridCount;
};

numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]); // 1
