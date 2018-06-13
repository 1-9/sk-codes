/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

var allPathsSourceTarget = function(graph) {
  let ans = [],
    current = [];

  function sub(graph, i = 0) {
    if (graph[i].length) {
      for (let j of graph[i]) {
        current.push(j);
        sub(graph, j);
        current.pop();
      }
    } else {
      ans.push([0, ...current]);
    }
  }

  sub(graph, 0);
  console.log(ans);
  return ans;
};

allPathsSourceTarget([[1, 2], [3], [3], []]);
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]);
