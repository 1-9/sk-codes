// to specify 'this' keyword in comments surrounded 'this' with quotes

let accord = {
  company: 'honda',
  color: 'red',
  make: 2001
};

let bmw = {
  company: 'bmw',
  color: 'blue',
  make: 2013
};

let camry = {
  company: 'toyota',
  color: 'black',
  make: 2003
};

// without any 'this' keyword but this is not possible always
// since function will reside in other objects
function printCarDetails(car) {
  console.log(car.company, car.color, car.make);
}

printCarDetails(accord);
printCarDetails(camry);

// why we need 'this'
// mostly code reusability
// function availability can be in a different object

// 'this' - is a hidden parameter by default javascript creates a 'this'
// every time a function is created
// the value passed in to 'this' is dependent only on CALL SITE
// just like other arguments your function takes

let shared = {
  mileageCaluculator: function (gasPrice) {
    let tax = gasPrice * 7 / 100;
    console.log(tax);
    if (this.make < 2005) {
      console.log(80);
      return 80;
    } else {
      console.log(90);
      return 90;
    }
  }
};

// rule 1 is obj.fn(), if the function fn has a 'this' binding
// it will be bound to the object obj
// refactored shared mileageCaluculator to shared object
// accord.mileageCaluculator(100);

// rule 2 is obj.fn.call(this, arguments) or obj.fn.apply(this, [arguments])
shared.mileageCaluculator.call(accord, 100);
shared.mileageCaluculator.apply(accord, [100]);

shared.mileageCaluculator.call(camry, 50);
shared.mileageCaluculator.apply(camry, [50]);

shared.mileageCaluculator.call(bmw, 50);
shared.mileageCaluculator.apply(bmw, [50]);

// call and apply can be used on functions outside object too

function hello(greeting) {
  console.log(this.name, greeting);
}

let bob = {
  name: 'bob'
};

let mac = {
  name: 'mac'
};

hello.call(bob, 'good morning');
hello.apply(mac, ['good evening']);