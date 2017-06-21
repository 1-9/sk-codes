let myObject = {};
Object.defineProperty(myObject, "a", {
  value: 2,
  writable: true,
  configurable: true,
  enumerable: true
});


Object.defineProperty(myObject, "b", {
  value: 3,
  writable: false, // not writable
  configurable: true,
  enumerable: true
});

myObject.b = 9;
console.log(21, '170319-object.js', myObject);
