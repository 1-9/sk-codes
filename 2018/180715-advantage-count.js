var advantageCount = function(a, b) {
  let ans = [],
    aSort = sortIndex(a),
    bSort = sortIndex(b);

  for (let i = 0; i < bSort.length; i++) {
    let foundBigger;
    for (let j = 0; j < aSort.length; j++) {
      if (aSort[j].v > bSort[i].v) {
        ans[bSort[i].i] = aSort[j].v;
        aSort.splice(j, 1);
        foundBigger = true;
        break;
      }
    }
    if (!foundBigger && aSort.length) {
      ans[bSort[i].i] = aSort[0].v;
      aSort.splice(0, 1);
    } else {
      foundBigger = undefined;
    }
  }
  return ans;
};

function sortIndex(arr) {
  return arr.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
}

advantageCount([12, 24, 8, 32], [13, 25, 32, 11]); // [ 24, 32, 8, 12 ]
advantageCount([2, 7, 11, 15], [1, 10, 4, 11]); // [ 2, 11, 7, 15 ]
advantageCount([5621, 1743, 5532, 3549, 9581], [913, 9787, 4121, 5039, 1481]); // [ 1743, 9581, 5532, 5621, 3549 ]
advantageCount([0], [0]); // [ 0 ]
advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2]); // [ 2, 0, 1, 2, 4 ]
