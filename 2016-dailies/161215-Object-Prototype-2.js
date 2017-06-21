// traverse and print all enumerable properties on the prototype chain
const log = console.log;

let Animal = function (name, sound) {
  this.name = name;
  this.sound = sound;
};

Animal.prototype.eat = function (food) {
  log(9, '161215-Object-Prototype-2.js', this, ' eats ', food);
};

let cat = new Animal('mint', 'meow');

let enumeratePrototype = function (obj) {
  for (var k in obj) {
    if (k === '[[Prototype]]') {
      log(17, '161215-Object-Prototype-2.js', k, obj); // cannot access k, obj from here
      enumeratePrototype(k);
    } else {
      log(11, '161215-Object-Prototype-2.js', k);
    }
  }
};

enumeratePrototype(cat);


// "for of" loop iterates on the actual values instead of indexes if the data structure has an iterator object
// regular arrays have a built-in @@iterator by default
// regular objects do not have a built-in @@iterator

let myArray = [1, 2, 3];
let iterator = myArray[Symbol.iterator]();
log(32, '161215-Object-Prototype-2.js', iterator.next());
log(33, '161215-Object-Prototype-2.js', iterator.next());
log(34, '161215-Object-Prototype-2.js', iterator.next());
log(35, '161215-Object-Prototype-2.js', iterator.next());
