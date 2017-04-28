window.onload = function () {
  console.log('loaded page');
  let body = document.querySelector('body');
  console.log(body.innerText);
  body.innerText = Array.from(document.querySelectorAll('.main-container'))
    .map(() => `simple data`).join(' ');
};