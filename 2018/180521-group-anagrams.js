// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function sortString(str) {
  return str
    .split('')
    .sort((a, b) => a > b)
    .join('');
}

var groupAnagrams = function(strs) {
  let ans = [];
  strs.reduce((acc, v, i) => {
    let sortedString = sortString(v);
    if (!acc[sortedString]) {
      ans.push([v]);
      acc[sortedString] = ans[ans.length - 1];
    } else if (acc[sortedString]) {
      acc[sortedString].push(v);
    }
    return acc;
  }, {});
  console.log(ans);
  return ans;
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
