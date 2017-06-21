// write a recursive function that takes in an array and uses recursion
// to return its contents in reverse

// closure practice
function a() {
  var apple = 'appl';
  b();

  console.log(apple);
}

function b() {
  apple = 'apple';
}

a(); // appl

function c() {
  var apple = 'appl';
  d();

  function d() {
    apple = 'apple';
  }
  console.log(apple);
}

c(); // apple