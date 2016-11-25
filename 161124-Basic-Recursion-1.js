// sample recursive function which runs three times
let counter = 0;

function runThree() {
  function sub() {
    if (counter === 3) {
      return 'success';
    } else {
      counter++;
      return sub();
    }
  }
  return sub();
}

// recursive map function to iterate through an array and do something
let recursiveMap = function (collection, fn, count, arrayBuilder) {
  count = count || 0;
  arrayBuilder = arrayBuilder || [];
  if (count < collection.length) {
    arrayBuilder.push(fn(collection[count]));
    count++;
    return recursiveMap(collection, fn, count, arrayBuilder);
  } else {
    return arrayBuilder;
  }
};

// use log as console.log
let log = console.log;

// recursiveMap tests
let recursiveMapTester = function () {
  let a = [1, 2, 3, 4, 5];

  let square = function (val) {
    return val * val;
  };

  let addFive = function (val) {
    return val + 5;
  };

  let squaredA = recursiveMap(a, square);
  a !== squaredA ? log('1. ✅') : log('1. ❌');
  a.toString() === [1, 2, 3, 4, 5].toString() ? log('2. ✅') : log('2. ❌');
  squaredA.toString() === [1, 4, 9, 16, 25].toString() ? log('3. ✅') : log('3. ❌');

  let addFiveA = recursiveMap(a, addFive);
  a !== addFiveA ? log('4. ✅') : log('4. ❌');
  a.toString() === [1, 2, 3, 4, 5].toString() ? log('5. ✅') : log('5. ❌');
  addFiveA.toString() === [6, 7, 8, 9, 10].toString() ? log('6. ✅') : log('6. ❌');

  runThree();
  counter === 3 ? log('7. ✅') : log('7. ❌');
};

recursiveMapTester();
