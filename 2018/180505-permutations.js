function permutations(str, currentStr = '', ans = []) {
  if (!str.length) {
    ans.push(currentStr);
  } else {
    for (let i = 0; i < str.length; i++) {
      let current = str[i];
      currentStr += str[i];
      str = str.slice(0, i) + str.slice(i + 1);
      permutations(str, currentStr, ans);
      currentStr = currentStr.slice(0, currentStr.length - 1);
      str = str.slice(0, i) + current + str.slice(i);
    }
  }
  console.log(ans);
  return ans;
}

function subsets(str, currentStr = '', ans = []) {
  if (!str.length) {
    ans.push(currentStr);
  } else {
    let current = str[0];
    str = str.slice(1);
    subsets(str, currentStr + current, ans);
    subsets(str, currentStr, ans);
    str = current + str;
  }
  return ans;
}

console.log(permutations('abc'));
console.log(permutations('abc').length);
console.log(subsets('abcd'));
console.log(permutations('abcd'));
console.log(permutations('abcd').length);
