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

  let s1 = new Set();

  s1.add('nyc');
  s1.add('sf');

  s1.size;

  s1.delete('nyc');
  s1.size;

  let dogs = ['hulky', 'minty'];
  let dogsSet = new Set(dogs);
  let dogsSetKeys = dogsSet.keys();
  dogsSet.has('hulky'); // true
  dogsSet.has('minty'); // true
  dogsSet.add('july');
  console.log(dogsSetKeys);
  console.log(dogsSetKeys.next().value);
  dogsSet.add('cripto');
  console.log(dogsSetKeys.next().value);
  console.log(dogsSetKeys);
  console.log(dogsSetKeys.next().value);

};
