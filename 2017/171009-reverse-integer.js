var reverse = function(x) {
  let negativeNumber = x < 0,
    ans,
    xArray = x.toString().split("");

  x = Math.abs(x);
  for (let i = 0; i < xArray.length / 2; i++) {
    [xArray[i], xArray[xArray.length - i - 1]] = [
      xArray[xArray.length - i - 1],
      xArray[i]
    ];
  }
  ans = parseInt(xArray.join(""));
  return ans > 2147483647 ? 0 : negativeNumber ? ans - 2 * ans : ans;
};

reverse(1534236469);
reverse(2147483647);
reverse(100);
reverse(987);
reverse(-321);
reverse(-2345);
reverse(1234);
// Example1: x = 123, return 321
// Example2: x = -123, return -321
