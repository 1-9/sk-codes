var isMatch = function(s, p) {
  console.log(s, p);
};

isMatch("aa", "a");
isMatch("aa", "aa");
isMatch("aaa", "aa");
isMatch("aa", "a*");
isMatch("aa", ".*");
isMatch("ab", ".*");
isMatch("aab", "c*a*b");
