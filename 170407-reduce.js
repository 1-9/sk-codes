// var sum = [0, 1, 2, 3].reduce(function(acc, val) {
//   return acc + val;
// }, 0);

Array.prototype.skreduce = function skreduce(cb) {
  return function () {
    return this.map(function () {

    });
  };
}

[1, 2, 3].skreduce(add);
