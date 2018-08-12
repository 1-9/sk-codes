var spiralMatrixIII = function(R, C, row, column) {
  let ans = [[row, column]],
    total = R * C,
    directions = {
      up: [-1, 0],
      down: [1, 0],
      right: [0, 1],
      left: [0, -1]
    },
    nextRight = {
      right: 'down',
      down: 'left',
      left: 'up',
      up: 'right'
    },
    series = [1, 1],
    currentDirection = 'right';

  while (ans.length < total) {
    for (let i = 0; i < series.length; i++) {
      let curr = series[i];
      while (curr) {
        row += directions[currentDirection][0];
        column += directions[currentDirection][1];
        if (row > -1 && row <= R - 1 && column > -1 && column <= C - 1) {
          ans.push([row, column]);
        }
        curr--;
      }
      currentDirection = nextRight[currentDirection];
    }
    series = series.map(v => v + 1);
  }
  return ans;
};

spiralMatrixIII(1, 4, 0, 0);
