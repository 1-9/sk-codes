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

  function Dog(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  Dog.mainDog = function () {
    return this.name;
  };

  Dog.prototype.names = function () {
    return this.name;
  };

  let snickers = new Dog('snickers', 'male');
  Dog.mainDog();
  console.log(snickers);

  class Cat {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }

    names() {
      return this.name;
    }

    static mainDog() {
      return this.name;
    }
  }

  console.log(Cat.mainDog());
  Cat.mainDog();

  let miky = new Cat('miky', 'male');
  console.log(miky);

  function* pauseExecution() {
    for (let i = 0; i < 10; i++) {
      yield i;
    }
  }

  let a = pauseExecution();

  for (const val of a) {
    console.log(val);
  }

};
