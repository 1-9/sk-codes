let foo;

function setFoo(val) {
  foo = val;
}

function getFoo() {
  return foo;
}


module.exports = { setFoo: setFoo, getFoo: getFoo };
