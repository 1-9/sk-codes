function quickSort(arr) {
  let pivot = arr.length - 1;
  for (var i = 0; i < pivot; i++) {
    if (arr[i] >= arr[pivot]) {
      swap(arr, i, pivot);
      swap(arr, i, --pivot);
      i--;
    }
  }
  console.log(arr, pivot);
}

function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

quickSort([5, 3, 6, 1, 8, 4]);