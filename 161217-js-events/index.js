window.onload = function () {

  let container2 = document.getElementById('container2');
  container2.addEventListener('click', container2Event, true);

  function container2Event(event) {
    console.log(13, 'container2.js', event);
  }


  let container1 = document.getElementById('container1');
  container1.addEventListener('click', function (event) {
    let time = Date.now();
    let newTime = time + 10000;
    while (newTime >= Date.now()) {}
    console.log(8, 'container1.js', event);
  }, false);

  container2.click();
  container1.click();

};
