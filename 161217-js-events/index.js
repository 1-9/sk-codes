window.onload = function () {
  init();
};

function init() {

  let container1 = document.getElementById('container1');
  container1.addEventListener('click', function (event) {
    console.log(8, 'container1.js', event);
  }, false);

  let container2 = document.getElementById('container2');
  container2.addEventListener('click', function (event) {
    console.log(13, 'container2.js', event);
    event.stopPropagation();
  }, false);

  let mainContainer = document.getElementById('mainContainer');
  mainContainer.addEventListener('click', function (event) {
    console.log(18, 'maincontainer.js', event);
  }, true);

}
