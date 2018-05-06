function binary(num, ans = '') {
  if (num < 1) {
    return ans;
  } else {
    const remainder = Math.floor(num % 2).toString();
    num = num / 2;
    ans = remainder.concat(ans);
    return binary(num, ans);
  }
}

console.log(binary(2)); // 10
console.log(binary(8)); // 1000
console.log(binary(42)); // 101010
console.log(binary(43)); // 101011
