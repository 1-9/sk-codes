function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var pivot = Math.round(arr.length / 2),
      left = arr.slice(0, pivot),
      right = arr.slice(pivot);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(arr1, arr2) {
  var ans = [];
  while (arr1.length || arr2.length) {
    if (arr1[0] > arr2[0] || arr1[0] === undefined) {
      ans.push(arr2.shift());
    } else if (arr1[0] < arr2[0] || arr2[0] === undefined) {
      ans.push(arr1.shift());
    }
  }
  return ans;
}

// test mergeSort function
console.log(25, '170216-merge-sort.js', mergeSort([8, 3, 5, 1, 9])); // [ 1, 3, 5, 8, 9 ]
console.log(25, '170216-merge-sort.js', mergeSort([8, 3, -5, -4, 1, 9])); //[ -5, -4, 1, 3, 8, 9 ]
console.log(25, '170216-merge-sort.js', mergeSort([-8, -3, -5, -0, 1, 9])); //[ -8, -5, -3, -0, 1, 9 ]
