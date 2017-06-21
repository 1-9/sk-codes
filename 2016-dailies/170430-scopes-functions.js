try {
  foo;
} catch (err) { // block scope variable err
  console.log(err);
}

console.log(err); // err not defined --> ERROR

var foo = function bar() {
  console.log(foo, bar);
};

console.log(foo);
foo();
