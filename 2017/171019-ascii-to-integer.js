/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let number = parseInt(str);

  if (number && number > 2147483647) {
    return 2147483647;
  }

  if (number && number < -2147483648) {
    return -2147483648;
  }

  return parseInt(str) ? parseInt(str) : 0;
};

console.log(myAtoi(""));
console.log(myAtoi("9889"));
console.log(myAtoi("2147483648"));
