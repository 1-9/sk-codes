function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        for (var k = j; k < i; k++) {
          var newTemp = arr[k];
          arr[k] = arr[i];
          arr[i] = newTemp;
        }
      }
    }
  }
  return arr;
}

// test insertionSort function
console.log(25, '170216-insertion-sort.js', insertionSort([8, 3, 5, 1, 9])); // [ 1, 3, 5, 8, 9 ]
console.log(25, '170216-insertion-sort.js', insertionSort([8, 3, -5, -4, 1, 9])); //[ -5, -4, 1, 3, 8, 9 ]
console.log(25, '170216-insertion-sort.js', insertionSort([-8, -3, -5, -0, 1, 9])); //[ -8, -5, -3, -0, 1, 9 ]
