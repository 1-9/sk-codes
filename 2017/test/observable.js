var Rx = require("rxjs/Rx");

// var of = require("rxjs/add/observable/of");
// var map = require("rxjs/add/operator/map");

// Rx.Observable.of(1, 2, 3)
//   .map((val) => console.log(val)).subscribe()

// var source = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   try {
//     nonsense
//   } catch (error) {
//     observer.error('invalid bro')
//   }
//   observer.complete();
// });

// var sub = source.subscribe(function (val) {
//   console.log(val);
// }, function (err) {
//   console.log(err);
// }, function () {
//   console.log('done');
// })

// var source = Rx.Observable.from([1, 2, 3]);
let numbers = [1, 2, 3];
var source = Rx.Observable.create(observer => {
  for (let n of numbers) {
    observer.next(n);
  }
  observer.complete();
});

source.subscribe((val) => console.log(val));
