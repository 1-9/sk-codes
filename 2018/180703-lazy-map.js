function LazyMap(arr, cbs) {
  this.arr = arr;
  this.cbs = cbs || [v => v];
}

LazyMap.prototype.map = function(cb) {
  let cbs = [...this.cbs];
  cbs.push(cb);
  return new LazyMap(this.arr, cbs);
};

LazyMap.prototype.indexOf = function(val) {
  for (let i = 0; i < this.arr.length; i++) {
    let result = this.arr[i];
    for (let j = 0; j < this.cbs.length; j++) {
      result = this.cbs[j](result);
      if (result === val) {
        console.log(i);
        return i;
      }
    }
  }
  console.log(-1);
  return -1;
};

let m1 = new LazyMap([1, 2, 3]);
let double = v => v * 2;

m1.map(double).indexOf(6); // 2

let m2 = m1.map(double).map(double);

m2.indexOf(78); // -1
