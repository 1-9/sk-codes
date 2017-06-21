// Naive bubble sort implementation
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

bubbleSort([2, 3, 38, 9, 1, 4, 5]);
bubbleSort([2, -3, 7, 9, -10, 0,]);