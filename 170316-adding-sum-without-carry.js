/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A little boy is studying arithmetics. He has just learned how to add two integers,                      //
// written one below another, column by column. But he always forgets about the important part - carrying. //
//                                                                                                         //
// Given two integers, find the result which the little boy will get.                                      //
// Example                                                                                                 //
//                                                                                                         //
// For param1 = 456 and param2 = 1734, the output should be 1180                                           //
//                                                                                                         //
//    456                                                                                                  //
//   1734                                                                                                  //
// + ____                                                                                                  //
//   1180                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


function additionWithoutCarrying(a, b) {
  let aArray = String(a).split(''),
    bArray = String(b).split(''),
    ansArray = [];
  while (aArray.length || bArray.length) {
    ansArray.push(parseInt(String(parseInt(aArray.pop() || 0) + parseInt(bArray.pop() || 0)).split('').pop()));
  }
  return parseInt(ansArray.reverse().join(''));
}

additionWithoutCarrying(999, 234); // 123
additionWithoutCarrying(456, 1734); // 1180
additionWithoutCarrying(99512, 23822); // 12334
