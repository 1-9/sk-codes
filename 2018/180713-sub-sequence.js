var numMatchingSubseq = function(str, words) {
  let hashStr = {};
  str.split('').forEach(char => {
    if (hashStr[char]) {
      hashStr[char]++;
    } else {
      hashStr[char] = 1;
    }
  });
  for (let i = 0; i < words.length; i++) {

  }
};

numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']);
