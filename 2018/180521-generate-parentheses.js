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

const parens = ['(', ')'];

var generateParenthesis = function(n, ans = [], current = '') {
  if (current.length === 2 * n) {
    ans.push(current);
  } else {
    for (let i = 0; i < 2; ++i) {
      generateParenthesis(n, ans, current + parens[i]);
    }
  }
  console.log(ans);
  return ans;
};

generateParenthesis(3);
