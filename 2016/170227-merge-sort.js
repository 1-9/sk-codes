function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var middle = Math.round(arr.length / 2);
    var left = mergeSort(arr.slice(0, middle));
    var right = mergeSort(arr.slice(middle));
    return mergeArrays(left, right);
  }
}

function mergeArrays(arr1, arr2) {
  var ans = [];
  while (arr1.length || arr2.length) {
    if (arr1[0] > arr2[0]) {
      ans.push(arr2.shift());
    } else if (arr2[0] > arr1[0]) {
      ans.push(arr1.shift());
    }
    if (arr2.length && arr1.length === 0) {
      ans.push(arr2.shift());
    }
    if (arr1.length && arr2.length === 0) {
      ans.push(arr1.shift());
    }
  }
  return ans;
}

console.log(30, '170227-merge.js', mergeSort([4, 5, 91, 2, 3]));
console.log(31, '170227-merge.js', mergeSort([4, 1, 6, 5, 9, 2, 3]));
