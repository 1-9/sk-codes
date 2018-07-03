function snake(row, column) {
  let matrix = [],
    rowIndex = 0,
    upper = row - 1,
    lower = 0,
    count = 1,
    down = true;

  for (let i = 0; i < row; i++) {
    matrix.push([]);
  }

  while (count <= row * column) {
    if (down) {
      while (lower <= row - 1) {
        matrix[lower].push(count);
        count++;
        lower++;
      }
      down = false;
      lower = 0;
    } else {
      while (upper >= 0) {
        matrix[upper].push(count);
        count++;
        upper--;
      }
      upper = row - 1;
      down = true;
    }
  }
  console.log(matrix);
  return matrix;
}

snake(4, 5);
// [ [ 1, 8, 9, 16, 17 ],
//   [ 2, 7, 10, 15, 18 ],
//   [ 3, 6, 11, 14, 19 ],
//   [ 4, 5, 12, 13, 20 ] ]

snake(10, 5);
// [ [ 1, 20, 21, 40, 41 ],
//   [ 2, 19, 22, 39, 42 ],
//   [ 3, 18, 23, 38, 43 ],
//   [ 4, 17, 24, 37, 44 ],
//   [ 5, 16, 25, 36, 45 ],
//   [ 6, 15, 26, 35, 46 ],
//   [ 7, 14, 27, 34, 47 ],
//   [ 8, 13, 28, 33, 48 ],
//   [ 9, 12, 29, 32, 49 ],
//   [ 10, 11, 30, 31, 50 ] ]
