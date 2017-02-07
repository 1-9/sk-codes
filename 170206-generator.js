let i = 1;

function* getSomeNumbers() {
  while (i <= 10) {
    i++;
    yield i;
  }
}

let it = getSomeNumbers();

console.log(7, '170206-generator.js', it.next());
console.log(7, '170206-generator.js', it.next());
console.log(7, '170206-generator.js', it.next());
console.log(7, '170206-generator.js', it.next());
