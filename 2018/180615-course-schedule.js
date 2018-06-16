/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let allSets = [];
  for (let [u, v] of prerequisites) {
    for (let i = 0; i < allSets.length; i++) {}
  }
};

function union(setA, setB) {
  var _union = setA;
  for (var elem of setB) {
    _union.add(elem);
  }
  return _union;
}

canFinish(3, [[0, 1], [0, 2], [1, 2]]);
// canFinish(3, [[1, 0], [2, 0], [2, 1]]);
// canFinish(2, [[1, 0], [0, 1]]);
