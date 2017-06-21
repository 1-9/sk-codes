function getNumbers() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
      var k = i;
      return function (k) {
        console.log(i);
      };
    }(i), 0);
  }
}

getNumbers();

function getNumbersBind() {
  for (var i = 0; i < 10; i++) {
    setTimeout(function (i) {
      console.log(i);
    }.bind(this, i), 0);
  }
}

getNumbersBind();
