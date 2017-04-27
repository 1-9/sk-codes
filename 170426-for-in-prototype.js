let a = {
  1: 1,
  2: 2,
  3: 3
};

Object.prototype.test = function () {
  return 1;
};

for (var key in a) {
  if (a.hasOwnProperty(key)) console.log(key);
}

let c = ['kkr', 'mi', 'rcb', 'srh'];

Array.prototype.test = function () {
  return 2;
};

for (var key in c) {
  console.log(key);
}
