// creates scope block enclosing the object
var z, x, y;
var r = 10;
with(Math) {
  x = r * cos(PI);
  y = r * sin(PI / 2);
  z = PI * r * r;
}
console.log(x, y, z);

let obj = { a: 'apple', b: 'baidu' };
with(obj) {
  console.log(a, b);
}
