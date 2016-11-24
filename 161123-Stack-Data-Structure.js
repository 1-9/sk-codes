// storage, push(value), pop(), size()
let log = console.log;

let Stack = function Stack() {
  this.storage = '';
  this.count = 0;
};

Stack.prototype.push = function (value) {
  this.storage += '*' + value;
  this.count++;
};

Stack.prototype.pop = function () {
  let removedValue = this.storage.slice(this.storage.lastIndexOf('*') + 1, this.storage.length + 1);
  let remainingStack = this.storage.slice(0, this.storage.lastIndexOf('*'));
  this.count--;
  this.storage = remainingStack;
  return removedValue;
};

Stack.prototype.counter = function () {
  return this.count;
};

let s1 = new Stack();

s1.push('havish');
s1.push('surya');
s1.push('mahitha');
log(s1.pop());

log(s1);
log(s1.counter());