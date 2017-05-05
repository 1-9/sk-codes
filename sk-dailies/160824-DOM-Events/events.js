var button = document.getElementsByClassName('buttonClass');

button[0].addEventListener('click', function () {
  console.log('button clicked');
}, false);


var span = document.getElementsByClassName('spanClass');
span[0].addEventListener('click', function () {
  // event.stopPropagation();
  console.log('span clicked');
}, false);

var divSibling = document.getElementsByClassName('newDivClass');
divSibling[0].addEventListener('click', function () {
  console.log(18, 'events.js', 'div sibling event');
}, false)

var div = document.getElementsByClassName('divClass');
div[0].addEventListener('click', function () {

  divSibling[0].click();
  console.log('div clicked');
}, false);
