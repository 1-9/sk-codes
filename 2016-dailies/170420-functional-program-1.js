let a = [1, 2, 3, 4, 5];

function mapreducer(list, mapperFunction) {
  return list.reduce(function (acc, val) {
    acc.push(mapperFunction(val));
    return acc;
  }, []);
}

function square(v) {
  return v * v;
}

console.log(a.map(square));
console.log(mapreducer(a, square));

function filterreduce(list, reducerFunction) {
  return list.reduce(function (acc, val) {
    if (reducerFunction(val)) acc.push(val);
    return acc;
  }, []);
}

function even(val) {
  return val % 2 === 0;
}

let b = [6, 7, 8, 9, 10, 11];

console.log(b.filter(even));
console.log(filterreduce(b, even));
