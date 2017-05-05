// arrow function and spread operator
var square = (...x) =>
{
  return x.map(val => val * val);
};

console.log(7, '160814-es6-basics.js', square(1, 2, 3));

var a = [1, 2, 3];
var b = ['a', 'b', 'c'];

var c = [...b, ...a];
console.log(12, '160814-es6-basics.js', c);


// destructuring
function getAddress() {
  return {
    city: 'NYC',
    state: {},
    zip: '10005'
  };
}
let { city, state, zip } = getAddress();

console.log(25, '160814-es6-basics.js', state, city, zip);

let { city: i, state: s, zip: z } = getAddress();
console.log(29, '160814-es6-basics.js', i, s, z);

function display({ name = 'Default', age = 'No Age' }) {
  console.log(31, '160814-es6-basics.js', name, age);
}
var person = { name: 'SSS', age: 20 };
var person1 = {};
display(person);
display(person1);

let p1 = {
  name: 'SSS',
  age: '20'
};

let { age, name } = p1;
// console.log(44, '160814-es6-basics.js', age, name);

function hello(message = 'Hello World')
{
  console.log(47, '160814-es6-basics.js', message);
}
hello('Jay');
hello('');
hello();

if (true)
{
  console.log(54, '160814-es6-basics.js', hello);
}