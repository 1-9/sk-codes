function curry(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args)
    : (...moreArgs) => curry(fn, ...args, ...moreArgs);
}

let addCurry = curry((a, b, c) => a + b + c);
console.log(addCurry(1)(2)(3));
