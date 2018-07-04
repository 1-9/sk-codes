function stringMatcher(s1, s2) {
  let ans = 0,
    count = 0;
  function sub(level = 0, tempStr = '') {
    if (tempStr.length === s2.length) {
      if (tempStr === s2) {
        ans++;
      }
    } else {
      for (let i = level; i < s1.length; i++) {
        if (tempStr === '' || tempStr[0] === s2[0]) {
          let current = s1[i];
          tempStr += current;
          sub(++level, tempStr);
          tempStr = tempStr.slice(0, tempStr.length - 1);
        }
      }
    }
  }
  sub();
  console.log(ans);
  return ans;
}

stringMatcher('abab', 'ab'); // 3
stringMatcher('bcde', 'ce'); // 1
stringMatcher('wioueroew', ''); // 1
stringMatcher('', ''); // 1
stringMatcher('', 'ab'); // 0
