/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const arrayLength = strs.length;
  if (arrayLength === 1) return strs[0];
  let ans = strs[0];
  if (arrayLength === 0) return '';

  for (let i = 1; i < arrayLength; i++) {
    ans = getCommon(strs[i], ans);
  }
  return ans;
};

const getCommon = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return str1.slice(0, i);
    }
  }
  return str1;
};

longestCommonPrefix(['flower', 'flow', 'flight']); // 'fl'
longestCommonPrefix(['dog', 'racecar', 'car']); // ''
longestCommonPrefix(['', 'b']); // ''
longestCommonPrefix(['b']); // 'b'
