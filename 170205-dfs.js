function dfs(tree) {
  let ans = [];

  function sub(tree) {
    if (!tree.children) {
      ans.push(tree.value);
      return;
    } else {
      ans.push(tree.value);
      for (var i = 0; i < tree.children.length; i++) {
        sub(tree.children[i]);
      }
    }
  }
  sub(tree);
  return ans;
}


let tree1 = {
  value: 5,
  children: [{
    value: 4,
    children: [{
      value: 3,
      children: [{
        value: 2,
        children: [{
          value: 1
        }]
      }]
    }]
  }]

};

dfs(tree1); // [5, 4, 3, 2, 1]
