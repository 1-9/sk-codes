/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romans = [
      'I',
      'IV',
      'V',
      'IX',
      'X',
      'XL',
      'L',
      'XC',
      'C',
      'CD',
      'D',
      'CM',
      'M'
    ],
    numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let ans = 0,
    doubleIndex = -1;

  for (let i = 0; i < s.length; i++) {
    doubleIndex = romans.indexOf(s.substr(i, 2));
    if (doubleIndex > -1) {
      i++;
      ans += numbers[doubleIndex];
    } else {
      doubleIndex = romans.indexOf(s.substr(i, 1));
      ans += numbers[doubleIndex];
    }
  }
  return ans;
};

romanToInt('LVIII'); // 58
