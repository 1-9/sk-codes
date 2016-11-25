const log = console.log;

// sample recursive function which runs three times
function runThree() {
  let counter = 0;

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

log(runThree());

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

let square = function (val) {
  return val * val;
};

let addFive = function (val) {
  return val + 5;
};

let a = [1, 2, 3, 4, 5];

log(recursiveMap(a, square));
log(recursiveMap(a, addFive));
log(a);