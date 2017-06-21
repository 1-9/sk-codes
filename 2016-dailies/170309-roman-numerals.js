function getValue(char) {
  const values = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };
  return values[char];
}


function convertToNumeral(romanNumeral) {
  let runningTotal = getValue(romanNumeral[0]);
  for (var i = 1; i < romanNumeral.length - 1; i++) {
    if (getValue(romanNumeral[i]) < getValue(romanNumeral[i + 1])) {
      runningTotal -= getValue(romanNumeral[i]);
    } else {
      runningTotal += getValue(romanNumeral[i]);
    }
  }
  runningTotal += getValue(romanNumeral[romanNumeral.length - 1]);
  return runningTotal;
}

console.log(28, '170309-roman-numerals.js', convertToNumeral('DXV')); // 515
console.log(29, '170309-roman-numerals.js', convertToNumeral('MIX')); // 1009
console.log(30, '170309-roman-numerals.js', convertToNumeral('CCC')); // 300
console.log(31, '170309-roman-numerals.js', convertToNumeral('LI')); // 51
console.log(32, '170309-roman-numerals.js', convertToNumeral('LL')); // 100
console.log(33, '170309-roman-numerals.js', convertToNumeral('DVX')); // 505
console.log(34, '170309-roman-numerals.js', convertToNumeral('X')); // 20
console.log(35, '170309-roman-numerals.js', convertToNumeral('DCD')); // 900
