/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(s) {
  let stack = [0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      let current,
        last = stack[stack.length - 1];
      if (last) {
        current = 2 * last;
      } else {
        current = 1;
      }
      stack.pop();
      stack[stack.length - 1] = stack[stack.length - 1] + current;
    } else {
      stack.push(0);
    }
  }
  return stack[0];
};

scoreOfParentheses('()'); // 1
scoreOfParentheses('(())'); // 2
scoreOfParentheses('(()(()))'); // 6
