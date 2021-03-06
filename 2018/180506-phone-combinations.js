// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

/**
 * @param {string} digits
 * @return {string[]}
 */
const lookup = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

var letterCombinations = function(digits) {
  return letterCombinationsHelper(digits.split('').map(v => lookup[v]));
};

function letterCombinationsHelper(input, ans = [], current = '') {
  if (!input.length) {
    if (current) {
      ans.push(current);
    }
  } else {
    let [first, ...rest] = input;
    for (let i = 0; i < first.length; i++) {
      current += first[i];
      letterCombinationsHelper(rest, ans, current);
      current = current.slice(0, current.length - 1);
    }
  }
  return ans;
}

console.log(letterCombinations('23')); // [ 'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf' ]
console.log(letterCombinations('')); // []
