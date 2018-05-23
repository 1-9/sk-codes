// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */

const parens = ['(', ')'],
  matches = {
    '(': ')'
  };

var generateParenthesis = function(n, ans = [], current = '') {
  if (current.length === 2 * n) {
    if (isValid(current)) {
      ans.push(current);
    }
  } else {
    for (let i = 0; i < 2; ++i) {
      if (current[0] !== parens[1]) {
        generateParenthesis(n, ans, current + parens[i]);
      }
    }
  }
  return ans;
};

function isValid(s) {
  return !s.split('').reduce(function(acc, val, ind) {
    if (matches[acc[acc.length - 1]] === val) {
      acc.pop();
    } else {
      acc.push(val);
    }
    return acc;
  }, []).length;
}

console.log(generateParenthesis(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
