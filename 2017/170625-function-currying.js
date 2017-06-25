///////////////////////////////////////////////////////////////////////////////////

function yack(...args) {
  return function () {
    return args.forEach(function (val) {
      return args[0](val);
    });
  }
}

function add(a, b, c) {
  return a + b + c;
}

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
