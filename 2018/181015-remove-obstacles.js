function removeObstacle(numRows, numColumns, lot) {
  var ans = Infinity;
  function sub(row, column, distance) {
    if (lot[row] && lot[row][column]) {
      if (lot[row][column] === 9) {
        ans = Math.min(ans, distance);
      } else {
        lot[row][column] = 0;
        sub(row + 1, column, distance + 1);
        sub(row - 1, column, distance + 1);
        sub(row, column + 1, distance + 1);
        sub(row, column - 1, distance + 1);
      }
    }
  }
  sub(0, 0, 0);
  console.log(ans);
  return ans;
}

removeObstacle(3, 3, [[1, 0, 0], [1, 0, 0], [1, 9, 1]]); // 3
removeObstacle(5, 4, [[1, 1, 1, 1], [0, 1, 1, 1], [0, 1, 0, 1], [1, 1, 9, 1], [0, 0, 1, 1]]); // 5
removeObstacle(5, 4, [[1, 1, 1, 1], [0, 0, 1, 1], [0, 1, 0, 1], [1, 1, 9, 1], [0, 0, 1, 1]]); // 7
removeObstacle(5, 4, [[1, 1, 1, 1], [0, 0, 0, 1], [0, 1, 0, 1], [1, 9, 0, 1], [0, 1, 1, 1]]); // 10
