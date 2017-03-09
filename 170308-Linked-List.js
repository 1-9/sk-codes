// implement linked list addToTail

function node(val) {
  return {
    val: val
  };
}

function linkedList(val) {
  this.storage = new node();
  this.storage.tail = true;
  this.storage.head = true;

  for (var i = 0; i < arguments.length; i++) {

  }
}

linkedList.prototype.addToTail = function (val) {
  let currentPosition = this.storage;

  while (true) {
    delete currentPosition.tail;
    if (currentPosition.next) {
      currentPosition = currentPosition.next;
    } else {
      currentPosition.next = new node(val);
      currentPosition.next.tail = true;
      break;
    }
  }

};


let l1 = new linkedList(9);
l1.addToTail(8);
l1.addToTail(7);
l1.addToTail(6);
console.dir(l1, { depth: null });
