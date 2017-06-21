function bfs(tree) {
  var queue = [];

  function sub(node) {
    console.log(5, '170221-bfs.js', node.value);
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        queue.push(node.children[i]);
      }
    }
    while (queue.length) {
      sub(queue.shift());
    }
  }

  sub(tree);
}

var tree1 = {
  value: 1,
  children: [{ value: 2, children: [{ value: 4 }, { value: 5, children: [{ value: 8 }] }] }, { value: 3, children: [{ value: 6, children: [{ value: 9 }] }, { value: 7 }] }]
};

bfs(tree1);
