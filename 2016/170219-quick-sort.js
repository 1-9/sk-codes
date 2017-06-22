function quickSort(arr) {

  // base case
  if (arr.length < 2) {
    return arr;
  }

  // assume mid point as pivot (this doesn't matter pivot can be any element in the list)
  var pivot = Math.floor(arr.length / 2),
    left = [],
    right = [];

  // logic for sorting
  for (var i = 0; i < arr.length; i++) {
    if (i === pivot) {
      continue;
    } else if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursively combine multiple sub problems
  return quickSort(left).concat([arr[pivot]]).concat(quickSort(right));
}

// test quickSort function
console.log(25, '170216-quick-sort.js', quickSort([8, 3, 5, 1, 9])); // [ 1, 3, 5, 8, 9 ]
console.log(25, '170216-quick-sort.js', quickSort([8, 3, -5, -4, 1, 9])); //[ -5, -4, 1, 3, 8, 9 ]
console.log(25, '170216-quick-sort.js', quickSort([-8, -3, -5, -0, 1, 9])); //[ -8, -5, -3, -0, 1, 9 ]
