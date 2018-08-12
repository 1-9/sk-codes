var possibleBipartition = function(N, dislikes) {
  let adjacencyList = {},
    hash = {},
    ans = true;

  dislikes.forEach(v => {
    if (!adjacencyList[v[0]]) {
      adjacencyList[v[0]] = [];
    }
    adjacencyList[v[0]].push(v[1]);
  });

  function dfs([person] = [], flag = true) {
    if (hash[person] === undefined) {
      hash[person] = flag;
    } else if (hash[person] !== flag) {
      ans = false;
      return;
    }
    if (adjacencyList[person]) {
      for (let i = 0; i < adjacencyList[person].length; i++) {
        dfs([adjacencyList[person][i]], !flag);
      }
    }
  }

  dfs(dislikes[0]);
  return ans;
};

possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]);
possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]);
possibleBipartition(1, []);
