function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var middle = Math.round(arr.length / 2),
      left = [],
      right = [];

    for (var i = 0; i < arr.length; i++) {
      if (middle === i) {
        continue;
      } else if (arr[i] < arr[middle]) {
        left.push(arr[i]);
      } else if (arr[i] > arr[middle]) {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(arr[middle]).concat(quickSort(right));
  }
}

console.log(23, '170227-merge.js', quickSort([4, 5, 91, 2, 3]));
console.log(24, '170227-merge.js', quickSort([4, 1, 6, 5, 9, 2, 3]));
