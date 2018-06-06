/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
function isNStraightHand(hand, len) {
  let allNums = {},
    count = 0;
  hand.forEach((a, b) => {
    if (!allNums[a]) {
      allNums[a] = 1;
    } else {
      allNums[a] += 1;
    }
  });
  let ans = 0;
  for (var key in allNums) {
    while (allNums[key] > 0) {
      ans = ans + lenMatcher(allNums, parseInt(key), len);
    }
  }
  return ans;
}

function lenMatcher(allNums, key, len) {
  let counter = 0,
    hasAllNums = true,
    ans = 0;
  while (counter < len) {
    if (allNums[key + counter] > 0) {
      counter++;
    } else {
      hasAllNums = false;
      break;
    }
  }
  if (hasAllNums) {
    ans += len;
    decrementAllNums(allNums, key, len);
  } else {
    allNums[key] = 0;
  }
  return ans;
}

function decrementAllNums(allNums, key, len) {
  let counter = 0;
  while (counter < len) {
    allNums[key + counter] -= 1;
    counter++;
  }
}

isNStraightHand([1, 1, 2, 2, 1, 2], 2); // true
isNStraightHand([1, 1, 2, 2, 3, 3], 2); // false
isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3); // true
isNStraightHand([7, 14, 6, 10, 9, 10, 11, 8, 1, 13, 12], 5); // true
isNStraightHand([1, 2, 3, 4, 5, 6], 2); // true
isNStraightHand([0, 1], 2); // true
isNStraightHand([2, 1], 2); // true
isNStraightHand([5, 1], 2); // false
isNStraightHand([1, 2], 2); // true
isNStraightHand([0, 0], 2); // false
