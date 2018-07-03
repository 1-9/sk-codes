function snake(row, column) {
  let matrix = new Array(row).fill().map(() => []),
    counter = 1,
    direction = true,
    max = row * column,
    rowIndex = 0;

  while (counter <= max) {
    if (rowIndex < 0) {
      direction = true;
      rowIndex++;
    }
    if (rowIndex === row) {
      direction = false;
      rowIndex--;
    }
    matrix[rowIndex].push(counter);
    if (direction) {
      rowIndex++;
    } else {
      rowIndex--;
    }
    counter++;
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
