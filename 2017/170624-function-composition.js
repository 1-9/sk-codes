///////////////////////////////////////////////////////////////////////////////////

function pipe(...fns) {
  return function (result) {
    fns.forEach(function (fn) {
      result = fn(result);
    })
    return result;
  }
}

function compose(...fns) {
  return pipe(...fns.reverse());
}

function double(val) {
  return 2 * val;
}

function increment(val) {
  return ++val;
}

var di = pipe(double, increment);
// console.log(di(9));

///////////////////////////////////////////////////////////////////////////////////

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

console.log(add(9, 5)); // 14

// nesting n functions where n is the number of arguments
function addCurry(a) {
  return function (b) {
    return a + b;
  }
}
console.log(addCurry(9)(5)); // 14

// what if you don't know the number of arguments that will be passed into the function
// javascript has built in utilities call and apply
function addCurryArguments(...args) {
  console.log(args);
}

console.log(addCurryArguments.call(this, 8, 9));

function isNot(fn) {
  return function (...args) {
    return !fn(...args);
  }
}

function isEven(v) {
  return v % 2 == 0;
}

var isOdd = isNot(isEven);

console.log(isOdd(9));
console.log(isEven(9));
