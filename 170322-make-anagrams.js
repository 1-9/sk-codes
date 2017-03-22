function anagram(a, b) {
  let ans = 0,
    common = 0,
    duplicateFinder = a.split('').reduce(function (acc, val) {
      acc[val] = val;
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

console.log(23, '170322-make-anagrams.js', anagram('abcd', 'cef'));
console.log(25, '170322-make-anagrams.js', anagram('cde', 'abc'));
console.log(20, '170322-make-anagrams.js', anagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));
