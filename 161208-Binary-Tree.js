function binaryTree(val) {
  this.val = val;
}

binaryTree.prototype.addChild = function (val) {
  if (this.val < val) {
    if (!this.right) {
      this.right = new binaryTree(val);
    } else {
      this.right.addChild(val);
    }
  }

  if (this.val > val) {
    if (!this.left) {
      this.left = new binaryTree(val);
    } else {
      this.left.addChild(val);
    }
  }

};

let b1 = new binaryTree(8);
b1.addChild(7);
b1.addChild(9);
b1.addChild(3);
b1.addChild(10);
b1.addChild(5);
console.dir(b1, { depth: null });
