/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(
  graph,
  ans = 0,
  hasVisitedAllNodes = false,
  nodesSoFar = {},
  currentNode = 0
) {
  if (hasVisitedAllNodes) {
    console.log(ans);
  } else {
    if (!nodesSoFar[currentNode]) {
      for (let i = 0; i < graph[currentNode].length; i++) {}
      // nodesSoFar[currentNode] = true;
    }
  }
};

shortestPathLength([[1, 2, 3], [0], [0], [0]]);
