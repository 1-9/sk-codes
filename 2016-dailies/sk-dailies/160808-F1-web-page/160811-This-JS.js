function a() {
  console.log('inside a');
}
a.prototype.b = function () {
  console.log('inside b');
}
console.log(a.prototype.b());