function permutations(str, chosen = '', ans = []) {
  if (str === '') {
    ans.push(chosen);
  } else {
    for (let i = 0; i < str.length; i++) {
      chosen += str[i];
      str = str.slice(0, i) + str.slice(i + 1);
      permutations(str, chosen, ans);

      str = str.slice(0, i) + chosen[chosen.length - 1] + str.slice(i);
      chosen = chosen.slice(0, chosen.length - 1);
    }
  }
  return ans;
}

console.log(21, permutations('abc'));
