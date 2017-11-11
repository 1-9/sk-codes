function dfs(tree) {
  console.log(tree.value);
  if (tree.children.length) {
    for (var i = 0; i < tree.children.length; i++) {
      dfs(tree.children[i]);
    }
  }
}

function bfs(tree, first) {
  if (!first) {
    console.log(tree.value);
    first = true;
  }
  if (tree.children.length) {
    for (var i = 0; i < tree.children.length; i++) {
      console.log(tree.children[i].value);
    }
    for (var i = 0; i < tree.children.length; i++) {
      bfs(tree.children[i], first);
    }
  }
}

let a = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [{ value: 6, children: [] }, { value: 7, children: [] }]
        },
        { value: 5, children: [] }
      ]
    },
    {
      value: 3,
      children: [{ value: 8, children: [] }, { value: 9, children: [] }]
    }
  ]
};

dfs(a);
console.log(
  "*****************************************************************"
);
bfs(a);
