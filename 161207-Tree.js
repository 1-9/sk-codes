/////////////////////////////////////
// using prototypical inheritance  //
// basic tree with add children    //
/////////////////////////////////////

let Tree = function (val) {
  this.val = val;
  this.children = [];
};

Tree.prototype.addChildren = function (val) {
  let childNode = new Tree(val);
  this.children.push(childNode);
  return childNode;
};

let t1 = new Tree(1);
t1.addChildren(2);
let b2 = t1.addChildren(3);
b2.addChildren(4);

console.dir(t1, { depth: null });
