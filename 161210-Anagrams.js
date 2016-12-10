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

console.log(6, '161210-Anagrams.js', Anagrams('ab'));
console.log(7, '161210-Anagrams.js', Anagrams('abc'));
