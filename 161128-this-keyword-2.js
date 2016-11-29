let hello = function (greet) {
  console.log(this.name, greet);
};

let greeting = function (greet = 'hello') {
  hello.call(obj1, greet);
};

let obj1 = {
  name: 'Sim'
};

greeting('good morning');

setTimeout(greeting, 100);

function foo() {
  console.log(this.a);
}

var obj = {
  a: 2
};

var bar = function () {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2