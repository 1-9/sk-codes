let myObjLiteral = {
  ny: 'New York'
};

let myObjConstructor = new Object();

console.log(7, '161212-Object-Prototype.js', myObjLiteral instanceof Object); // true
console.log(8, '161212-Object-Prototype.js', myObjConstructor instanceof Object); // true
console.dir(myObjConstructor, { depth: null });
console.dir(myObjLiteral, { depth: null });

let literalStr = 'California';
let constructorStr = new String('Alabama');

console.log(15, '161212-Object-Prototype.js', literalStr instanceof String); // false
console.log(16, '161212-Object-Prototype.js', constructorStr instanceof String); // true

console.log(18, '161212-Object-Prototype.js', typeof literalStr); // string
console.log(19, '161212-Object-Prototype.js', typeof constructorStr); // object

console.dir(myObjConstructor, { depth: null });

