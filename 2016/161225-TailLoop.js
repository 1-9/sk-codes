// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
// Your objective is to determine the length of the loop.

function loop_size(node) {
  var i = 0,
    loop = 0,
    start = true;
  while (start) {
    if (!node.value) {
      node.value = ++i;
    } else {
      loop = ++i - node.value;
      start = false;
    }
    node = node.next;
  }
  return loop;
}
