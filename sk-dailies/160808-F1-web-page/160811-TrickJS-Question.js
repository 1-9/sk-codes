function a(num) {
  function baz() {
    return num;
  }

  this.biz = function biz() {
    console.log(num);
    return num;
  }

}

a.prototype.c = function () {
  console.log(num);
  return num;
}
a.test = 'h';

// var a1 = new a(8);

// a1.baz(); // access error there is no baz property on a 
// a1.biz(); // returns 8 passed on line 22 which is retained from closure scope
// a1.c(); // parameter num is not defined
// console.log(this);
// biz(); // biz is not defined in global scope since a1 is created using NEW keyword where this points to a not global scope

// a();

// a.baz(); // access error there is no baz property on a 
// a.biz(); // biz is not a function on a
// a.c() // function c is not defined on a and the failed lookup will delegate to Function prototype which doesn't have function c
// a.prototype.c(); // parameter num is not defined
// console.log(a.test); // we can add any property on function
// biz(); // biz is defined in global scope since a1 is invoked without new keyword
