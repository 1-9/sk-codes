function merge(arr1, arr2) {
  let ans = [];
  while (arr1.length || arr2.length) {
    if (arr1[0] < arr2[0] || arr2[0] === undefined) {
      ans.push(arr1.shift());
    } else if (arr1[0] > arr2[0] || arr1[0] === undefined) {
      ans.push(arr2.shift());
    }
  }
  return ans;
}

function mergeSort(arr) {
  var center, left, right, leftarr, rightarr;
  if (arr.length <= 1) {
    return arr;
  }
  center = Math.floor(arr.length / 2);
  left = arr.slice(0, center);
  right = arr.slice(center);
  leftarr = mergeSort(left);
  rightarr = mergeSort(right);
  return merge(leftarr, rightarr);
}

mergeSort([2, 5, 3, 8]);
mergeSort([5, 4, 3, 2, 1]);