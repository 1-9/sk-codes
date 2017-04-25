function calculateTax(amount, tax = 0.10, gratiuty = 0.15) {
  return console.log(tax * gratiuty * amount);
}

calculateTax(10, undefined, 0.25);

let f = new Boolean(false);
if (f) { console.dir(f, { depth: null }); }

let a = new Array(9);
console.log(a);

a.length = 20;
console.log(a);
