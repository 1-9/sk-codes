// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  return x + Math.abs(x) === 0 ? -parseInt(x.toString().split('').reverse().join('')) : parseInt(x.toString().split('').reverse().join(''));
};

console.log(17, '170324-reverse-integer.js', reverse(-456));
console.log(18, '170324-reverse-integer.js', reverse(123));
