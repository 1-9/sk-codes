function bubbleSort(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var alreadySorted = true;
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        alreadySorted = false;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (alreadySorted) {
      break;
    }
  }
  return arr;
}

// test bubbleSort function
console.log(25, '170216-bubble-sort.js', bubbleSort([8, 3, 5, 1, 9])); // [ 1, 3, 5, 8, 9 ]
console.log(25, '170216-bubble-sort.js', bubbleSort([8, 3, -5, -4, 1, 9])); //[ -5, -4, 1, 3, 8, 9 ]
console.log(25, '170216-bubble-sort.js', bubbleSort([-8, -3, -5, -0, 1, 9])); //[ -8, -5, -3, -0, 1, 9 ]
