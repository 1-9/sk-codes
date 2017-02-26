(function () {
  window.onload = function () {
    console.log(3, 'script.js', 'loaded window');

    window.addEventListener('keydown', function (e) {
      let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if (audio && key) {
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
      } else {
        return;
      }
    });

    let allKeys = document.querySelectorAll('kbd');
    allKeys.forEach((key) => {
      console.log(19, 'script.js', key);
      key.addEventListener('transitionend', function (e) {
        console.log(16, 'script.js', e);
        console.log(19, 'script.js', this);
      });
    });

  };
})();
