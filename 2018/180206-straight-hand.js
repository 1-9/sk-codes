/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, len) {
  let sortedHand = hand.sort((a, b) => a - b);
  let ans = helper(sortedHand, len);
  return ans.length * len === sortedHand.length;
};

function helper(arr, len, acc = [], ans = [], usedIndex = {}, level = 0) {
  if (acc.length === len) {
    let allNew = acc.every(v => !usedIndex[v.i]),
      newAcc = [];
    if (allNew) {
      acc.forEach(v => {
        usedIndex[v.i] = true;
        newAcc.push(v.current);
      });
      ans.push(newAcc);
    }
  } else {
    for (let i = level; i < arr.length; i++) {
      let current = arr[i];
      let previous = acc[acc.length - 1] && acc[acc.length - 1].current;
      if ((current - previous === 1 || acc.length === 0) && !usedIndex[i]) {
        acc.push({ current, i });
        helper(arr, len, [...acc], ans, usedIndex, ++level);
        acc.pop();
      }
    }
  }
  return ans;
}

isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3); // true
isNStraightHand([7, 14, 6, 10, 9, 10, 11, 8, 13, 12], 5); // true
isNStraightHand([1, 1, 2, 2, 1, 2], 2); // true
isNStraightHand([1, 2, 3, 4, 5, 6], 2); // true
isNStraightHand([0, 1], 2); // true
isNStraightHand([2, 1], 2); // true
isNStraightHand([1, 1, 2, 2, 3, 3], 2); // false
isNStraightHand([5, 1], 2); // false
isNStraightHand([1, 2], 2); // true
isNStraightHand([0, 0], 2); // false
