function Animal(type, age) {
  this.type = type;
  this.age = age;
}

Animal.prototype.setAge = function (age) {
  this.age = age;
};

Animal.prototype.getAge = function () {
  return this.age;
};

function Person(name, age) {
  this.name = name;
  Animal.prototype.setAge.call(this, age);
}

Person.prototype = Object.create(Animal.prototype);

let p1 = new Person('H', 29);

let cat = new Animal('cat', 2);

console.log(25, '170104-Matrix-Determinant.js', p1.getAge());
console.log(26, '170104-Inheritance.js', cat.getAge());
