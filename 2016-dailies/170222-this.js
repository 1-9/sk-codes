var a = 'apple';

function getColor() {
  console.log(this.a);
}

// 1. default rule
getColor();

var person = {
  age: 9,
  getAge: function getAge(age) {
    console.log(this.age + age);
    return this.age;
  }
};

// 2. object.method()
person.getAge();

var newPerson1 = {
  age: 24
};

var newPerson2 = {
  age: 4
};

// 3. use call, apply, bind to change this context
person.getAge.apply(newPerson1, [4]);
person.getAge.call(newPerson2, 2);
var newPerson1getAge = person.getAge.bind(newPerson1);
newPerson1getAge(3);

var Car = function Car(color, company, miles) {
  // var this = {};
  this.color = color;
  this.company = company;
  this.miles = miles;
  // return this;
};

Car.prototype.getMiles = function getMiles() {
  console.log(36, '170222-this.js', this.miles);
  return this.miles;
};

// 4. new keyword changes this and adds prototype binding
var camry = new Car('red', 'toyota', 100000);
console.log(33, '170222-this.js', camry);
console.log(36, '170222-this.js', camry.__proto__);
camry.score = 99;
camry.getMiles();

console.log(55, '170222-this.js', camry.hasOwnProperty('getMiles'));
console.log(56, '170222-this.js', camry.hasOwnProperty('score'));
console.log(57, '170222-this.js', Car.hasOwnProperty('getMiles'));

// 5. steTimeout this will always be global
setTimeout(function hello() {
  for (var i = 0; i < 5; i++) {
    console.log(49, '170222-this.js', i);
  }
}, 100);

for (var i = 1; i < 6; i++) {
  setTimeout((function (i) {
    console.log(54, '170222-this.js', i);
  })(i));
}

// 6. Arrow function this is lexical and will not follow any of the above rules
var x = () => 4;
