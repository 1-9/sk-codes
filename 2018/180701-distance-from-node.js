var distanceK = function(root, target, K) {
  let ans = [],
    graph = {},
    current = { [target.val]: true };

  function buildGraph(node) {
    if (node) {
      if (!graph[node.val]) {
        graph[node.val] = [];
      }
      if (node.left) {
        graph[node.val].push(node.left);
        if (!graph[node.left.val]) {
          graph[node.left.val] = [node];
        }
        buildGraph(node.left);
      }
      if (node.right) {
        graph[node.val].push(node.right);
        if (!graph[node.right.val]) {
          graph[node.right.val] = [node];
        }
        buildGraph(node.right);
      }
    }
  }
  buildGraph(root);
  dfs(target);

  function dfs(currentNode, level = 0) {
    if (level === K) {
      ans.push(currentNode.val);
    } else {
      for (let i = 0; i < graph[currentNode.val].length; i++) {
        if (!current[graph[currentNode.val][i].val]) {
          current[graph[currentNode.val][i].val] = true;
          dfs(graph[currentNode.val][i], level + 1);
        }
      }
    }
  }
  return ans;
};
