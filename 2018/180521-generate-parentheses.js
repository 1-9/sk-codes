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

function generateParenthesis(n, left = n, right = n, current = '', ans = []) {
  if (left === 0 || left > right) {
    ans.push(current + new Array(right).fill(')').join(''));
  } else if (left === right) {
    generateParenthesis(n, left - 1, right, current + '(', ans);
  } else {
    generateParenthesis(n, left - 1, right, current + '(', ans);
    generateParenthesis(n, left, right - 1, current + ')', ans);
  }
  return ans;
}

// console.log(generateParenthesis(2)); // [ '(())', '()()' ]
// console.log(generateParenthesis(3)); // [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// console.log(generateParenthesis(4)); // [ '(((())))', '((()()))', '((())())', '((()))()', '(()(()))', '(()()())', '(()())()', '(())(())', '(())()()', '()((()))', '()(()())', '()(())()', '()()(())', '()()()()' ]
