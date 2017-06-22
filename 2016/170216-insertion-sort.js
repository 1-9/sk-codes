// inplace insertion sort
function insertionInplace(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= arr.length; j++) {
      if (arr[i] > arr[j]) {
        slide(arr, j, i);
      }
    }
  }
  return arr;
}

// helper slide function
function slide(arr, sourcePosition, destinationPosition) {
  for (var i = destinationPosition; i < sourcePosition; i++) {
    var newTemp = arr[i];
    arr[i] = arr[sourcePosition];
    arr[sourcePosition] = newTemp;
  }
}

// test slide function
// console.log(21, '170216-insertion-sort.js', slide([1, 2, 3, 4, 5], 2, 0)); // [ 3, 1, 2, 4, 5 ]
// console.log(21, '170216-insertion-sort.js', slide([1, 2, 3, 4, 5], 3, 1)); // [ 1, 4, 2, 3, 5 ]
// console.log(21, '170216-insertion-sort.js', slide([1, 2, 3, 4, 5], 4, 0)); // [ 5, 1, 2, 3, 4 ]

// test insertionInplace function
console.log(25, '170216-insertion-sort.js', insertionInplace([8, 3, 5, 1, 9])); // [ 1, 3, 5, 8, 9 ]
console.log(25, '170216-insertion-sort.js', insertionInplace([8, 3, -5, -4, 1, 9])); //[ -5, -4, 1, 3, 8, 9 ]
console.log(25, '170216-insertion-sort.js', insertionInplace([-8, -3, -5, -0, 1, 9])); //[ -8, -5, -3, -0, 1, 9 ]
