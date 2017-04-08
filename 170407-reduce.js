Array.prototype.skreduce = function skreduce(cb) {
  if (this.length === 1) {
    return this[0];
  };
  var ans = this[0];
  for (var i = 1; i < this.length; i++) {
    ans = cb(ans, this[i]);
  }
  return ans;
};

let add = (x, y) => x * y;

let a = [1, 8, 3].skreduce(add);
console.log(a);

let b = [1, 8, 3].reduce(add);
console.log(b);

let c = [8].skreduce(add);
console.log(c);

let d = [8].reduce(add);
console.log(d);
