function hello() {
  return () => {
    console.log(this.message);
  };
}

let obj1 = {
  message: 'hello arrow function'
};

let greet = hello.call(obj1);
greet();

let timer = function () {
  setTimeout(function () {
    console.log(this.message);
  }.bind(obj1), 1000);
};
timer.call(obj1);

let name = 'hello';
console.log(typeof name);

let nameObject = new String('hello');
console.log(typeof nameObject);