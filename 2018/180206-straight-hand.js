/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
function isNStraightHand(hand, len) {
  let allNums = {};
  hand.forEach((a, b) => {
    if (!allNums[a]) {
      allNums[a] = 1;
    } else {
      allNums[a] += 1;
    }
  });

  for (var key in allNums) {
    console.log(key, allNums[key]);
    let count = 1;
    while (count < len + 1) {
      count++;
    }
  }
}

isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3); // true
// isNStraightHand([7, 14, 6, 10, 9, 10, 11, 8, 13, 12], 5); // true
// isNStraightHand([1, 1, 2, 2, 1, 2], 2); // true
// isNStraightHand([1, 2, 3, 4, 5, 6], 2); // true
// isNStraightHand([0, 1], 2); // true
// isNStraightHand([2, 1], 2); // true
// isNStraightHand([1, 1, 2, 2, 3, 3], 2); // false
// isNStraightHand([5, 1], 2); // false
// isNStraightHand([1, 2], 2); // true
// isNStraightHand([0, 0], 2); // false
