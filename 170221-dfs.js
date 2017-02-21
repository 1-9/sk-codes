function dfs(node) {
  // move this console log after the if check gives post order traversal
  console.log(4, '170221-dfs.js', node.value);
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      dfs(node.children[i]);
    }
  }
}

var tree1 = {
  value: 1,
  children: [{ value: 2, children: [{ value: 4 }, { value: 5 }] }, { value: 3, children: [{ value: 6 }, { value: 7 }] }]
};

dfs(tree1);
