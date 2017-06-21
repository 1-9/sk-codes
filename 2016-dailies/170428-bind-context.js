let cat = {
  name: 'lucky',
  food: 'milk',
  sayHi: function (type, age) {
    console.log(`hello ${type}, this is ${this.name} saying hello,
      I am ${age} years old and I eat/drink ${this.food}`);
  }
};

let dog = {
  name: 'hulky',
  food: 'biscuit'
};

let d1 = cat.sayHi.bind(dog, 'doggy');

d1(8);

function cycle() {
  return 'cycle';
}

cycle.prototype.sings = function () {
  this.walks();
};

cycle.prototype.walks = function () {
  console.log('walks');
};

let bike = new cycle();
bike.sings();

let a = 'apple',
  b = 'bing',
  c = 'cg',
  d = 'dany';

let aObj = {
  a,
  b,
  c,
  d
};

console.log(aObj);
