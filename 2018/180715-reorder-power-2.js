var reorderedPowerOf2 = function(num) {
  let numString = num.toString(),
    ans = false;
  function sub(str, current) {
    if (current.length === numString.length) {
      console.log(current);
      if (power_of_2(current)) {
        return true;
      }
    } else {
      for (let i = 0; i < str.length; i++) {
        if ((!current.length && str[i] !== '0') || current.length) {
          let temp = str[i];
          current += temp;
          str = str.slice(0, i) + str.slice(i + 1);
          sub(str, current);
          str = str.slice(0, i) + temp + str.slice(i);
          current = current.slice(0, current.length - 1);
        }
      }
    }
  }
  sub(numString, '');
  return ans;
};

function power_of_2(n) {
  n = parseInt(n);
  return n && (n & (n - 1)) === 0;
}

reorderedPowerOf2(1);
reorderedPowerOf2(268341);
reorderedPowerOf2(16);
reorderedPowerOf2(42);
