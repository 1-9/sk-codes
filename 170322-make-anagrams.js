//////////////////////////////////////////
// let sortedA = a.split('').sort(),    //
//   sortedB = a.split('').sort(),      //
// let ans = 0;                         //
//                                      //
// for (var i = 0; i < a.length; i++) { //
//   if (b.indexOf(a[i]) === -1) {      //
//     ans++;                           //
//   }                                  //
// }                                    //
//                                      //
// for (var j = 0; j < b.length; j++) { //
//   if (a.indexOf(b[j]) === -1) {      //
//     ans++;                           //
//   }                                  //
// }                                    //
// return ans;                          //
//////////////////////////////////////////

function anagram(a, b) {
  let ans = 0,
    common = 0,
    duplicateFinder = a.split('').reduce(function (acc, val) {
      if (acc[val]) {
        common--;
      } else {
        acc[val] = val;
      }
      return acc;
    }, {});
  b.split('').forEach(function (val) {
    if (!duplicateFinder[val]) {
      ans++;
    } else {
      common++;
    }
  });
  return a.length - common + ans;
}

console.log(41, '170322-make-anagrams.js', anagram('abcd', 'cef'));
console.log(42, '170322-make-anagrams.js', anagram('cde', 'abc'));
console.log(43, '170322-make-anagrams.js', anagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));
