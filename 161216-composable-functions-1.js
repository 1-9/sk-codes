let Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
});

let nextCharAtNumber = str => Box(str)
  .map(x => x.trim())
  .map(x => parseInt(x))
  .map(x => x + 1)
  .fold(x => String.fromCharCode(x));

const result = nextCharAtNumber('  64 ');
// console.dir(result, { depth: null });
console.log(10, '161216-composable-functions-1.js', result);
