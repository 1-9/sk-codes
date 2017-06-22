let camry = {
  car: 'sedan',
  color: 'black',
  vin: 'vi2893ewe820'
};

let proxyCamry = new Proxy(camry, {
  get(target, vin) {
    return target[vin].toUpperCase();
    // return 'Nah 👎👎👎';
  }
});

console.log(camry.vin);
console.log(proxyCamry.vin);

let carHandler = {
  get(target, madeIn) {
    return 'need 💵💵💵 for madeIn info';
  }
};

let car = new Proxy({ madeIn: 'NY' }, carHandler);

console.log(car.madeIn);
