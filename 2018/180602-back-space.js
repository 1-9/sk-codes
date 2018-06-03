/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

var backspaceCompare = function(S, T) {
  let s1 = helper(S);
  let s2 = helper(T);
  return s1 === s2;
};

function helper(str) {
  let ans = [];
  for (let i = 0; i < str.length; i++) {
    if (ans[ans.length - 1] && str[i] === '#') {
      ans.pop(str[i]);
    } else if (str[i] !== '#') {
      ans.push(str[i]);
    }
  }
  return ans.join('');
}

backspaceCompare('ab#c', 'ad#c'); // true
backspaceCompare('c##vnvr', '#c##vnvr'); // true
backspaceCompare('y#fo##f', 'y#f#o##f'); // true
backspaceCompare('ab##', 'c#d#'); // true
backspaceCompare('a##c', '#a#c'); // true
backspaceCompare('a#b', 'c'); // false
backspaceCompare('e##e#o##oyof##q', 'e##e#fq##o##oyof##q'); // true
