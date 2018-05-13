const matches = {
  '[': ']',
  '(': ')',
  '{': '}'
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

console.log(isValid('()[]{}'));
console.log(isValid('()'));
console.log(isValid('()'));
