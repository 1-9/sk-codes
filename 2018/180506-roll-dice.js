function rollDices(num, sum, currentTotal = 0, current = '', ans = []) {
  if (num === 0) {
    ans.push(current);
    return ans;
  } else {
    for (let i = 1; i < 7; i++) {
      if (
        currentTotal + i + (num - 1) * 1 <= sum &&
        currentTotal + i + (num - 1) * 6 >= sum
      ) {
        current += i;
        rollDices(num - 1, sum, currentTotal + i, current, ans);
        current = current.slice(0, current.length - 1);
      }
    }
  }
  return ans;
}

console.log(rollDices(2, 5)); // [ '14', '23', '32', '41' ]
console.log(rollDices(3, 5)); // [ '113', '122', '131', '212', '221', '311' ]
