/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  var ans = s[0],
    left,
    right;

  for (let i = 1; i < s.length; i++) {
    (left = i), (right = i);

    while (left > -1) {
      if (s[left - 1] === s[i]) {
        left--;
        updateAns();
      } else {
        break;
      }
    }

    while (right < s.length) {
      if (s[right + 1] === s[i]) {
        right++;
        updateAns();
      } else {
        break;
      }
    }

    while (left > -1 && right < s.length) {
      if (s[left - 1] && s[right + 1] && s[left - 1] === s[right + 1]) {
        right++;
        left--;
        updateAns();
      } else {
        break;
      }
    }
  }

  function updateAns() {
    if (right - left >= ans.length) {
      ans = s.slice(left, right + 1);
    }
  }
  return ans;
};

console.log(longestPalindrome("abba"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("b"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("bbb"));
console.log(longestPalindrome("bbbb"));
console.log(longestPalindrome("bbbbb"));
console.log(longestPalindrome("bbbbbb"));
console.log(longestPalindrome("bbbbbbb"));
