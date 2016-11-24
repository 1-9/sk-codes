// 161123-Stack-Data-Structure.js
// STACK - LIFO last in first out
// storage, push(value), pop(), size()

// stack constructor function
let Stack = function Stack() {
  this.storage = '';
  this.count = 0;
};

// insert values into stack
Stack.prototype.push = function (value) {
  // add * as a delimiter between stack values
  this.storage += '*' + value;
  this.count++;
  return this.count;
};

// remove last value from the stack
Stack.prototype.pop = function () {
  let delimiterIndex = this.storage.lastIndexOf('*');
  let poppedValue = this.storage.slice(delimiterIndex + 1, this.storage.length + 1);
  let remainingStack = this.storage.slice(0, delimiterIndex);
  this.count ? this.count-- : this.count;
  this.storage = remainingStack;
  return poppedValue;
};

// get count of items in stack
Stack.prototype.counter = function () {
  return this.count;
};

// use log as console.log
let log = console.log;

// stack tests
let stackTester = function () {
  let s1 = new Stack();
  s1.push('audi') === 1 ? log('1. ✅') : log('1. ❌');
  s1.pop() === 'audi' ? log('2. ✅') : log('2. ❌');
  s1.push('bmw');
  s1.push('ferrari');
  s1.counter() === 2 ? log('3. ✅') : log('3. ❌');
  s1.pop() === 'ferrari' ? log('4. ✅') : log('4. ❌');
  s1.pop();
  s1.pop() === '' ? log('5. ✅') : log('5. ❌');
  s1.counter() === 0 ? log('6. ✅') : log('6. ❌');
};

stackTester();