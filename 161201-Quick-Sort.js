function partition(arr, lo, hi) {
  let pivot = hi;
  for (var i = lo; i <= pivot; i++) {
    if (arr[i] > arr[pivot]) {
      swap(arr, i, pivot);
      swap(arr, i, --pivot);
      i--;
    }
  }
  return pivot;
}

function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
  return arr;
}

function quickSort(arr, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = arr.length - 1;
  if (lo < hi) {
    let pivot = partition(arr, lo, hi);
    quickSort(arr, lo, pivot - 1);
    quickSort(arr, pivot + 1, hi);
  }
  if (hi - lo === arr.length - 1) {
    console.log(arr);
    return arr;
  }
}

quickSort([5, 3, 6, 1, 8, 4]);
quickSort([90, -1, 63, 12, 81, 81]);
quickSort([9, 8, 7, 6, 5]);