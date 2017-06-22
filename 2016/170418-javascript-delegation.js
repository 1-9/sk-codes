// prototype pattern
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.eat = function (food, action) {
  this.food = food;
  this.action = action;
  console.log(this.name, this.action, this.food);
};

function fourLegged(name, age) {
  Animal.call(this, name, age);
}

fourLegged.prototype = Object.create(Animal.prototype);
fourLegged.prototype.run = function () {
  console.log(this.name, 'running');
};

var cat = new Animal('lily', 2);
cat.eat('milk', 'drinks');

var dog = new Animal('bulky', 4);
dog.eat('biscuit', 'eats');

var sheep = new fourLegged('beby', 3);
sheep.eat('grass', 'eats');

// object link to other objects OOLO pattern
var Library = {
  init(name, genre) {
    this.name = name;
    this.genre = genre;
  }
};

var b1 = Object.create(Library);

b1.hasDVD = function () {
  console.log(this.name, this.genre);
};

var b2 = Object.create(b1);
b2.init('outliers', 'inspiring');
b2.hasDVD(true);
