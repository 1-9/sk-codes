function findUniq(arr) {
  var initial = arr[0],
    second;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== initial && !second) {
      second = arr[i];
      ++i;
    }
    if ((initial || initial == 0) && (second || second == 0)) {
      return arr[i] ? arr[i] === initial ? second : initial : second;
    }
  }
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
