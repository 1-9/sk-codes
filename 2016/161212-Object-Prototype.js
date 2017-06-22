let log = console.log;
let dir = console.dir;

let myObjLiteral = {
  ny: 'New York'
};

let myObjConstructor = new Object();

log(7, '161212-Object-Prototype.js', myObjLiteral instanceof Object); // true
log(8, '161212-Object-Prototype.js', myObjConstructor instanceof Object); // true
dir(myObjConstructor, {
  depth: null
});
dir(myObjLiteral, {
  depth: null
});

let literalStr = 'California';
let constructorStr = new String('Alabama');

log(15, '161212-Object-Prototype.js', literalStr instanceof String); // false
log(16, '161212-Object-Prototype.js', constructorStr instanceof String); // true

log(18, '161212-Object-Prototype.js', typeof literalStr); // string
log(19, '161212-Object-Prototype.js', typeof constructorStr); // object

dir(myObjConstructor, {
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

dir(obj1, { depth: null });
dir(obj2, { depth: null });


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

dir(obj3, { depth: null });
dir(obj3.a, { depth: null });
dir(obj3.b, { depth: null });

let a1 = [1, 2, 3];
for (let i in a1) {
  log(65, '161212-Object-Prototype.js', a1[i]);
}
