function findUniq(arr) {
  let initial = createObject(arr[0], 0),
    second;
  for (var i = 1; i < arr.length; i++) {
    if (!checkMatch(arr[i], initial)) {
      second = createObject(arr[i], i);
      i++;
    }
    if (initial && second && (arr[i] || arr[i] === '')) {
      return checkMatch(arr[i], initial) ? arr[second.index] : arr[0];
    } else if (initial && second) {
      return arr.pop();
    }
  }
}

function checkMatch(str, obj) {
  var ans = true;
  for (var i = 0; i < str.length; i++) {
    if (!obj[str[i].toLowerCase()]) {
      ans = false;
      return ans;
    }
  }
  return ans;
}

function createObject(str, index) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    obj[str[i].toLowerCase()] = str[i];
  }
  obj['index'] = index;
  return obj;
}

function findUniqFun(arr) {
  let sortedArray = arr.sort((a, b) => a.toLowerCase().split('').sort((c, d) => c > d) > b.toLowerCase().split('').sort((e, f) => e > f));
  return sortedArray[0][0] === sortedArray[1][0] ? sortedArray.pop() : sortedArray[0];
}
console.log(findUniq(['', '', '', 'a', '', ''])); // === 'a'
console.log(findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter'])); // === 'Harry Potter'
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // === 'BbBb'
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // === 'foo'
console.log(findUniq(['', '', 'bac', '', '', '', ''])); // === 'bac'
console.log(findUniq(['foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab'])); // === ' '
