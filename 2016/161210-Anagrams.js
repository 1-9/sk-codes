function Anagrams(str) {
  var ans = [];

  function sub(s, builder) {
    if (builder.length === str.length) {
      ans.push(builder);
      builder = '';
    } else {
      for (var i = 0; i < s.length; i++) {
        sub(s.slice(0, i) + s.slice(i + 1), builder.concat(s[i]));
      }
    }
  };
  sub(str, '');
  return ans;
}

console.log(Anagrams('ab')); // [ 'ab', 'ba' ]
console.log(Anagrams('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
