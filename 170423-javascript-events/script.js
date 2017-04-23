window.onload = function () {

  function handleAddEvent() {
    console.log('add/remove event');
  }

  let addEvent = document.getElementById('addEvent');
  addEvent.addEventListener('click', handleAddEvent);

  let removeEvent = document.getElementById('removeEvent');
  removeEvent.addEventListener('click', function () {
    addEvent.removeEventListener('click', handleAddEvent);
    let removeEventText = document.getElementById('removeEventText');
    removeEventText.innerText = 'added';
  });

};
