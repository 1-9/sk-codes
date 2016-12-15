let myObjLiteral = {
  ny: 'New York'
};

let myObjConstructor = new Object();

console.log(7, '161212-Object-Prototype.js', myObjLiteral instanceof Object); // true
console.log(8, '161212-Object-Prototype.js', myObjConstructor instanceof Object); // true
console.dir(myObjConstructor, {
  depth: null
});
console.dir(myObjLiteral, {
  depth: null
});

let literalStr = 'California';
let constructorStr = new String('Alabama');

console.log(15, '161212-Object-Prototype.js', literalStr instanceof String); // false
console.log(16, '161212-Object-Prototype.js', constructorStr instanceof String); // true

console.log(18, '161212-Object-Prototype.js', typeof literalStr); // string
console.log(19, '161212-Object-Prototype.js', typeof constructorStr); // object

console.dir(myObjConstructor, {
  depth: null
});

let obj1 = {
  a: 'alpha'
};
let obj2 = {};
Object.defineProperty(obj2, "a", {
  value: 'beta',
  writable: true,
  configurable: true,
  enumerable: true,
});

console.dir(obj1, { depth: null });
console.dir(obj2, { depth: null });


let obj3 = {
  get a() {
    return 2;
  }
};

Object.defineProperty(
  obj3,
  "b", {
    get: function () {
      return this.a * 2;
    }
  }
);

console.dir(obj3, { depth: null });
console.dir(obj3.a, { depth: null });
console.dir(obj3.b, { depth: null });

let a1 = [1, 2, 3];
for (let i in a1) {
  console.log(65, '161212-Object-Prototype.js', a1[i]);
}
