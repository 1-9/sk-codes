function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentItem = arr[i];
    for (var j = 0; j < i; j++) {
      if (currentItem < arr[j]) {
        for (var k = i; k <= j; k--) {
          arr[k] = arr[k - 1];
        }
        arr[j] = currentItem;
      }
    }
  }
  return arr;
}

// test selectionSortNew function
console.log(25, '170216-insertion-sort.js', insertionSort([8, 3, 5, 1, 9])); // [ 1, 3, 5, 8, 9 ]
console.log(25, '170216-insertion-sort.js', insertionSort([8, 3, -5, -4, 1, 9])); //[ -5, -4, 1, 3, 8, 9 ]
console.log(25, '170216-insertion-sort.js', insertionSort([-8, -3, -5, -0, 1, 9])); //[ -8, -5, -3, -0, 1, 9 ]
