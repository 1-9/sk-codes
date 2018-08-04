var removeKdigits = function(num, k) {
  if (num.length === k) return '0';
  let numCache = {},
    ans = '';
  for (let i = 0; i < num.length; i++) {
    if (!numCache[num[i]]) {
      numCache[num[i]] = [];
    }
    numCache[num[i]].push(i);
  }

  for (let i = 0; i < num.length; i++) {
    if (k === 0) {
      ans += num.slice(i);
      break;
    }

    if (num.length - i === k) {
      break;
    }

    let foundNum = false;
    for (let key in numCache) {
      if (key <= num[i] && numCache[key][0] - i <= k && numCache[key][0] >= i) {
        for (let j = i; j < numCache[key][0]; j++) {
          numCache[num[j]].shift();
        }
        ans += key;
        k -= numCache[key][0] - i;
        i += numCache[key][0] - i;
        numCache[key].shift();
        foundNum = true;
        break;
      }
    }
    if (!foundNum) {
      ans += num[i];
    }
  }
  let nonZeroIndex = -1;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] !== '0') {
      nonZeroIndex = i;
      break;
    }
  }
  return ans.slice(nonZeroIndex);
};

removeKdigits('1432219', 3);
removeKdigits('10200', 1);
removeKdigits('00000000', 3);
removeKdigits('112', 1);
removeKdigits('43214321', 4); // 1321
// 1321
