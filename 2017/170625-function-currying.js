function add(a, b) {
  return a + b;
}

function addCurry(a) {
  return function (b) {
    return a + b;
  }
}

function addManyCurry(...args) {
  return function (...moreArgs) {
    return moreArgs.length ? addManyCurry(...args.concat(moreArgs)) : args.reduce((acc, val) => acc + val);
  };
};

var a1 = addManyCurry(9);
a1(8)()
console.log(a1(8)());

console.log(add(2, 3));
console.log(addCurry(2)(3));
console.log(addManyCurry(8)(9)(8)(8)(2, 3)());
console.log(addManyCurry(2)(3)());
console.log(addManyCurry(8, 2, 3)(9, 1)(8)(3)());
console.log(addManyCurry(8, 2, 3)(9, 1)(8)(3)());

function addManyCurryProper(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : (...moreArgs) => addManyCurryProper(fn, ...args, ...moreArgs);
};

var a1 = addManyCurryProper(add, 4);
console.log(a1(3, 4));

const yack = (fn, ...args) =>
  args.length >= fn.length ? fn(...args) : (...args2) => yack(fn, ...args, ...args2);

console.log(addManyCurryProper(9)(7, 1)());

var a = addManyCurryProper(add)(2);
console.log(a()(8));

function addArray(...args) {
  return args.reduce((acc, val) => acc + val);
}

console.log(add.length);
console.log(addArray.length);

console.log(yack(add)(1)(2));
yack(add)(1) // 6;

console.log(yack(add)(1)(2)(3));
yack(add)(1) // 6;
yack(add)(1)(2)(3) // 6;
yack(add, 1, 2)(3) // 6;
yack(add)(1, 2)(3) // 6;
yack(add)(1)()()()(2)(3) // 6;
yack(yack(add))(1)(2)(3) // 6;
yack(yack(yack(add)(1)))(2)(3) // 6;
yack(add)(1)(2)(3, 4, 5) // 6;

var curriedAdd1 = yack(add)(1);
curriedAdd1(2)(3) // 6;
curriedAdd1(2)(4) // 7;

var curriedAdd2 = yack(add);
var curriedAdd3 = curriedAdd2(1);
curriedAdd3(2)(3) // 6;
curriedAdd3(2)(4) // 7;
curriedAdd2(5)(2)(3) //10;
