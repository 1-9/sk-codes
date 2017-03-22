////////////////////////////////////////////////////////////////////////////////////////////////
// Description:                                                                               //
//                                                                                            //
// Define n!! as                                                                              //
//                                                                                            //
// n!! = 1 * 3 * 5 * ... * n if n is odd,                                                     //
//                                                                                            //
// n!! = 2 * 4 * 6 * ... * n if n is even.                                                    //
//                                                                                            //
// Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end. //
//                                                                                            //
// For a positive integer n, please count how many zeros are there at the end of n!!.         //
//                                                                                            //
// Example:                                                                                   //
//                                                                                            //
// count_zeros_n_double_fact(30) should return 3                                              //
////////////////////////////////////////////////////////////////////////////////////////////////

const countZeros = n => {
  if (n % 2) return 0;
  let f = [];
  for (let i = n; i > 0; i -= 2) {
    let num = i;
    while (num % 5 == 0) {
      f.push(num);
      num /= 5;
    }
  }
  return f.length;
};

console.log(34, '170321-zeros-at-end.js', countZeros(8));
console.log(35, '170321-zeros-at-end.js', countZeros(30));
console.log(44, '170321-zeros-at-end.js', countZeros(578));
