/**
 * @param {number[][]} edges
 * @return {number[]}
 */

var findRedundantConnection = function([edge, ...edges]) {
  let allSets = [new Set(edge)],
    ans;
  for ([u, v] of edges) {
    let p1, p2;
    for (let i = 0; i < allSets.length; i++) {
      if (!p1 && allSets[i].has(u)) {
        p1 = i;
      }
      if (!p2 && allSets[i].has(v)) {
        p2 = i;
      }
    }
    if (p1 > -1 && p2 > -1 && p1 === p2) {
      ans = [u, v];
    }
    if (p1 > -1 && p2 > -1) {
      let unionSet = union(allSets[p1], allSets[p2]);
      allSets[p1] = new Set();
      allSets[p2] = new Set();
      allSets.push(unionSet);
    } else if (p1 > -1) {
      let unionSet = union(allSets[p1], new Set([u, v]));
      allSets[p1] = new Set();
      allSets.push(unionSet);
    } else if (p2 > -1) {
      let unionSet = union(allSets[p2], new Set([u, v]));
      allSets[p2] = new Set();
      allSets.push(unionSet);
    }

    if (p1 === undefined && p2 === undefined) {
      allSets.push(new Set([u, v]));
    }
  }
  console.log(ans);
  return ans;
};

function union(setA, setB) {
  var _union = setA;
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

findRedundantConnection([[1, 2], [1, 3], [2, 3]]);
// [ 2, 3 ]

findRedundantConnection([[1, 5], [3, 4], [3, 5], [4, 5], [2, 4]]);
// [ 4, 5 ]

findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]);
// [ 1, 4 ]

findRedundantConnection([[1, 3], [3, 4], [1, 5], [3, 5], [2, 3]]);
// [ 3, 5 ]

findRedundantConnection([[1, 4], [3, 4], [1, 3], [1, 2], [4, 5]]);
// [ 1, 3 ]

findRedundantConnection([
  [9, 10],
  [5, 8],
  [2, 6],
  [1, 5],
  [3, 8],
  [4, 9],
  [8, 10],
  [4, 10],
  [6, 8],
  [7, 9]
]);
// [ 4, 10 ]
