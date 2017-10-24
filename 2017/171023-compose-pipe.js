// two function compose right, takes three arguments

function compose(fn1, fn2) {
  return (arg1, arg2, arg3) => fn1(fn2(arg1, arg2), arg3);
}

let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

let multiplyThenAdd = compose(add, multiply);
let addThenMultiply = compose(multiply, add);

console.log(multiplyThenAdd(2, 3, 4));
console.log(addThenMultiply(2, 3, 4));

// compose right and pipe left any number of functions, takes one argument

function pipeAny(...fns) {
  return function(result) {
    for (let i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

function composeAny(...fns) {
  return pipeAny(...fns.reverse());
}

let double = a => 2 * a;
let square = a => Math.pow(a, 2);
let decrement = a => --a;
let increment = a => ++a;

let pa = pipeAny(double, square);
let ca = composeAny(double, square);

console.log(pa(3));
console.log(ca(3));
