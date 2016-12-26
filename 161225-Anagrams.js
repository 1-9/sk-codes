function Anagrams(str) {
  var ans = [];
  var sub = function (s, builder) {
    if (builder.length === str.length) {
      ans.push(builder.join(''));
    } else {
      for (var i = 0; i < s.length; i++) {
        sub(s.slice(0, i) + s.slice(i + 1), builder.concat(s[i]));
      }
    }
  };
  sub(str, []);
  return ans;
}

console.log(14, '161225-Anagrams.js', Anagrams('ab'));
console.log(14, '161225-Anagrams.js', Anagrams('abc'));
