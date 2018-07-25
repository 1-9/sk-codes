var leafSimilar = function(root1, root2) {
  return populateLeaves(root1).join('') === populateLeaves(root2).join('');
};

function populateLeaves(tree, leaves = []) {
  if (tree) {
    if (!tree.left && !tree.right) {
      leaves.push(tree.val);
    } else {
      populateLeaves(tree.left, leaves);
      populateLeaves(tree.right, leaves);
    }
  }

  return leaves;
}
