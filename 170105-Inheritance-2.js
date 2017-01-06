let Animal = {
  init: function (name, age) {
    this.name = name;
    this.age = age;
  },
  getAge: function () {
    return this.age;
  }
};

let Person = Object.create(Animal);
Person.speak = function () {
  return this.name;
};

let p1 = Object.create(Person);
p1.init('H', 29);
p1.speak();

let cat = Object.create(Animal);
cat.init('cat', 2);
console.log(22, '170105-Inheritance-2.js', p1);
console.log(23, '170105-Inheritance-2.js', cat);

