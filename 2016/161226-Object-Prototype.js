let Foo = function (name) {
  this.name = name;
};

Foo.prototype.myName = function () {
  return this.name;
};

let Bar = function (name, age) {
  // if the same functionality exists use it by changing the context, donot redefine
  Foo.call(this, name);
  this.age = age;
};

// Donot use new function invocation to link prototypes
// Code should be specific to the intention, not side effect of some operation
Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.myAge = function () {
  return this.age;
};

let a = new Bar('a', 1);

let b = new Foo('b');

console.log(27, '161226-Object-Prototype.js', b.myName());
console.log(28, '161226-Object-Prototype.js', a.myName());
console.log(29, '161226-Object-Prototype.js', a.myAge());
console.log(30, '161226-Object-Prototype.js', Bar.prototype.isPrototypeOf(a));
console.log(31, '161226-Object-Prototype.js', Foo.prototype.isPrototypeOf(a));
console.log(32, '161226-Object-Prototype.js', Foo.prototype.isPrototypeOf(b));
