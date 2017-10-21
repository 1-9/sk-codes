/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var ans = true,
    xString = "" + x;

  for (var i = 0; i < xString.length / 2; i++) {
    if (xString[i] !== xString[xString.length - i - 1]) {
      ans = false;
    }
  }
  return ans;
};

console.log(isPalindrome(9));
console.log(isPalindrome(878));
console.log(isPalindrome(78));
