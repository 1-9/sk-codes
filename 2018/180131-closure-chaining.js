const helloNumbers = function() {
  let arr = [];
  for (var i = 0; i < 5; i++) {
    arr.push(
      (function(x) {
        return function() {
          console.log(x);
        };
      })(i)
    );
  }
  return arr;
};

let a = helloNumbers();
a[0]();
a[3]();

function chainMethod(spec) {
  var instance = {};

  instance.render = function render() {
    console.log('render');
    return instance;
  };

  instance.someOtherThing = function render() {
    console.log('some other thing');
    return instance;
  };

  return instance;
}

let test = chainMethod()
  .render()
  .someOtherThing();
