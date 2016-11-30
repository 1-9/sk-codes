// Sort "array" so that all elements with the value of zero are moved to the
// end of the array, while the other elements maintain order.
// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// Zero elements also maintain order in which they occurred.
// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

// Do not use any temporary arrays or objects. Additionally, you're not able
// to use any Array or Object prototype methods such as .shift(), .push(), etc

// the correctly sorted array should be returned.

function removeZeros(array) {
  let maxLength = array.length;
  for (let i = 0; i < maxLength; i++) {
    if (array[i] === 0 || array[i] === '0') {
      moveItemToLast(array, i);
      if (i > -1) {
        i--;
        maxLength--;
      }
    }
  }
  console.log(array);
  return array;
}
function moveItemToLast(arr, i) {
  let current = arr[i];
  for (let j = i; j < arr.length; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = current;
}

removeZeros([0, "0", 1, 2, 3]); // [ 1, 2, 3, 0, '0' ]
removeZeros([6, 0, 0, 13, 0, 78, 0, 0, 19, 14, 7, 2, 3, 0, 4]); // [ 6, 13, 78, 19, 14, 7, 2, 3, 4, 0, 0, 0, 0, 0, 0 ]
// moveItemToLast([1, 2, 0, 3], 1); // [1, 0, 3, 2]
