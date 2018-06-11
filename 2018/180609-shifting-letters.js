/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(str, shifts) {
  let charCodes = str.split('').map(v => v.charCodeAt(0));

  charCodes.forEach((v, i, arr) => {
    let j = i,
      sum = 0;
    while (j < shifts.length) {
      sum += shifts[j];
      j++;
    }
    if (sum > 26) {
      sum = sum % 26;
    }
    arr[i] += sum;
  });

  console.log(charCodes);
  charCodes.forEach((v, i) => {
    while (v > 121) {
      v = ((v - 122) % 26) + 96;
    }
    charCodes[i] = String.fromCharCode(v);
  });
  console.log(charCodes);
  return charCodes.join('');
};

shiftingLetters('qoqpvw', [95, 7, 67, 21, 33, 23]); // "cjeozt"
// shiftingLetters('abc', [3, 5, 9]);
// shiftingLetters('a', [35]);
// shiftingLetters('z', [52]);
// shiftingLetters('bifzhztrynhmlyzfnnev', [
//   245805103,
//   837266363,
//   905484932,
//   471489242,
//   397124802,
//   717670686,
//   212570096,
//   88819310,
//   299353983,
//   865581180,
//   63334099,
//   382078685,
//   864802579,
//   186319462,
//   225206488,
//   398829626,
//   584159196,
//   61152945,
//   94424902,
//   53661086
// ]); // uqciawyyxtrzxtqweuct
