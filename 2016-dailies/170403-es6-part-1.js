let [a, b] = [1, 2];
console.log(a, b);

[a, , , b] = [3, 4, 5, 6, 7];
console.log(a, b);

let { c } = { c: 'cnn' };
console.log(c);

const twice = (v) => 2 * v;
console.log(twice(4));

// twice = 9; // error assignment to constant variable

let weekend = () => ({ 'sa': 'saturday', su: 'sunday' });
console.log(weekend());

let subPrimes = [5, 7, 11];
let primes = [1, 2, 3, ...subPrimes];
console.log(primes);

class Animal {
  constructor(type, name) {
    this.name = name;
    this.type = type;
  }

  get info() {
    return this.name;
  }

  set info(name) {
    this.name = name;
    return this.name;
  }

}

let patty = new Animal('cat', 'patty');
console.log(patty);
console.log(patty.info);
patty.info = 'patzy';
console.log(patty.info);
