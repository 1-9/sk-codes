var subtreeWithAllDeepest = function(root) {
  function depth(node) {
    if (node) {
      return Math.max(depth(node.left), depth(node.right)) + 1;
    } else {
      return 0;
    }
  }

  function findNode(node) {
    if (node) {
      let l = depth(node.left),
        r = depth(node.right);
      if (l === r) {
        return node;
      } else if (l > r) {
        return findNode(node.left);
      } else {
        return findNode(node.right);
      }
    }
  }
  return findNode(root);
};
