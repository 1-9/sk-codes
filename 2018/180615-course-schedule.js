/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let ans = [true];
  let allCourses = {};
  for (let [u, v] of prerequisites) {
    if (!allCourses[u]) {
      allCourses[u] = [v];
    } else {
      allCourses[u].push(v);
    }
  }
  let status = new Array(numCourses).fill(false);
  for (let course in allCourses) {
    dfs(course, allCourses, status, ans, {});
  }
  return ans[0];
};

function dfs(node, allNodes, status, ans, visited) {
  if (!visited[node]) {
    if (!status[node]) {
      status[node] = true;
    } else {
      ans[0] = false;
      return;
    }
    if (allNodes[node] && allNodes[node].length) {
      for (let newNode of allNodes[node]) {
        dfs(newNode, allNodes, status, ans, visited);
      }
    }
    status[node] = false;
    visited[node] = true;
  }
}

canFinish(3, [[1, 0], [2, 1]]); // true
canFinish(2, [[1, 0], [0, 1]]); // false
canFinish(2, [[1, 0]]); // true
canFinish(3, [[1, 0], [2, 0], [2, 1]]); // true
canFinish(3, [[0, 1], [0, 2], [1, 2]]); // true
