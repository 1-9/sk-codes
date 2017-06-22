var log = console.log;

function findLongest(array) {
  return array.reduce(function (acc, val, ind) {
    return acc < val ? String(Math.abs(val)).length > String(Math.abs(acc)).length ? val : acc : acc;
  }, array.shift());
}

log(findLongest([90, 8, 800]));
log(findLongest([90, 8, 800]));
log(findLongest([-268457145, -2052, -16983, -2134168, -22, -4476969, -1052733, -268441839, -10821727, -545, -77603168, -16810869, 2147481013, -8399]));
