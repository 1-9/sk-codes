let updateFunctions = [];
for (var i = 0; i < 10; i++) {
  updateFunctions.push(function (i) {
    return function () {
      console.log(5, '161207-es6-destructuring.js', i);
      return i;
    };
  }(i));
}

updateFunctions[0]();
updateFunctions[1]();
updateFunctions[2]();


///////////////////////////////////////////////////////////////
// object destructuring always creates a new copy of a value //
// values are not passed by reference                        //
///////////////////////////////////////////////////////////////

let obj1 = { a: 'amazon', b: 'bing', c: 'cnet' };
let { a } = obj1 || {}; // safegaurding errors with an empty object
// a // 'amazon'
a = 'google';
console.log(27, '161207-es6-destructuring.js', a); // 'google'
console.log(28, '161207-es6-destructuring.js', obj1); // { a: 'amazon', b: 'bing', c: 'cnet' }

let arr1 = ['microsoft', 'ebay', 'twitter'];
let [, b, , g = 'instagram'] = arr1 || []; // safegaurding errors with an empty array
// b // 'ebay'
b = 'facebook';
console.log(34, '161207-es6-destructuring.js', b, g); // 'facebook', 'instagram'
console.log(35, '161207-es6-destructuring.js', arr1); // ['microsoft', 'ebay', 'twitter']
