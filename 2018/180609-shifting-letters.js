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
    if (sum > 25) {
      sum = sum % 26;
    }
    if (sum + arr[i] > 122) {
      arr[i] = String.fromCharCode(((sum + arr[i] - 122) % 26) + 96);
    } else {
      arr[i] = String.fromCharCode(arr[i] + sum);
    }
  });
  return charCodes.join('');
};

shiftingLetters('abc', [3, 5, 9]);
shiftingLetters('z', [52]);
shiftingLetters('qoqpvw', [95, 7, 67, 21, 33, 23]); // "cjeozt"
shiftingLetters('a', [35]);
