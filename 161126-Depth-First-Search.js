function depthFirstSearch(tree, ans) {
  ans = ans || [];
  if (tree.value) {
    ans.push(tree.value);
  }
  if (tree.children) {
    for (var i = 0; i < tree.children.length; i++) {
      depthFirstSearch(tree.children[i], ans);
    }
  }
  console.log(ans);
  return ans;
}

let tree1 = {
  value: 1,
  children: [{
    value: 2,
    children: [{
      value: 3
    }]
  }, {
    value: 4,
    children: [{
      value: 5
    }]
  }]
};

let tree2 = {
  value: 5,
  children: [{
    value: 4,
    children: [{
      value: 3
    }]
  }, {
    value: 2,
    children: [{
      value: 1
    }]
  }]
};
depthFirstSearch(tree1);
depthFirstSearch(tree2);