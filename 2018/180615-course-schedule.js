/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let allSets = [],
    ans = true;
  for (let [u, v] of prerequisites) {
    let p1, p2;
    if (allSets.length) {
      for (let i = 0; i < allSets.length; i++) {
        if (!p1 && allSets[i].has(u)) {
          p1 = i;
        }
        if (!p2 && allSets[i].has(v)) {
          p2 = i;
        }

        if (p1 > -1 && p2 > -1) {
          let newSet = union(allSets[p1], allSets[p2]);
          allSets.splice(p1, 1);
          allSets.splice(p2 - 1, 1);
          ans = false;
          allSets.push(newSet);
        } else if (p1 > -1) {
          let newSet = union(allSets[p1], new Set([u, v]));
          allSets.splice(p1, 1);
          allSets.push(newSet);
        } else if (p2 > -1) {
          let newSet = union(allSets[p2], new Set([u, v]));
          allSets.splice(p2, 1);
          allSets.push(newSet);
        }
      }
    } else {
      allSets.push(new Set([u, v]));
    }
  }
  console.log(15, allSets, ans);
  if (!ans) {
    return allSets[0].size === numCourses;
  }
  return ans;
};

function union(setA, setB) {
  var _union = setA;
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

canFinish(3, [[0, 1], [0, 2], [1, 2]]);
canFinish(3, [[1, 0], [2, 0], [2, 1]]);
canFinish(2, [[1, 0], [0, 1]]);
canFinish(2, [[1, 0]]);
