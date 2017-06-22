window.onload = function () {
  console.log('loaded page');
  let body = document.querySelector('body');
  console.log(body.innerText);
  body.innerText = Array.from(document.querySelectorAll('.main-container'))
    .map(() => `simple data`).join(' ');

  function hello() {
    console.log('hello');
  }

  hello();

  let beta = (x) => {
    if (x > 0) {
      return beta(--x);
    }
    return x;
  };

  beta(10);

  function good(...a) {
    console.log(a);
  }
  good(1, 2, 3);

  let handler = function hello() {
    console.log(handler, hello);
  };

  handler(); // works as expected

  handler = 9;

  handler(); // handler got reassigned causing ---> ERROR

  var foo = 'foo';
  (function bob() {
    var foo = 'foo1';
    console.log(foo);
  })();
  console.log(foo);

};
