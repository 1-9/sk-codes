var magicalString = function(n) {
  let current = [2],
    count = 3,
    ans = 1;
  if (n <= count) {
    return 1;
  }
  while (n > count) {
    let last = current[current.length - 1];
    if (current[0] === 2) {
      if (last === 1) {
        current.push(2);
        current.push(2);
      } else {
        current.push(1);
        current.push(1);
        ans += 2;
      }
      count += 2;
    } else if (current[0] === 1) {
      if (last === 1) {
        current.push(2);
      } else {
        current.push(1);
        ans++;
      }
      count++;
    }
    current.shift();
  }
  if (count > n && current[current.length - 1] === 1) {
    ans--;
  }
  return ans;
};

magicalString(6); // 3
magicalString(3); // 1
magicalString(9); // 4
magicalString(1); // 1
magicalString(5); // 3
magicalString(4); // 2

var findAndReplacePattern = function(words, pattern) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    let wordHash = {},
      patternHash = {},
      match = true;
    for (let j = 0; j < words[i].length; j++) {
      let current = words[i][j],
        matchCurrent = pattern[j];
      if (!wordHash[current]) {
        wordHash[current] = matchCurrent;
      } else if (wordHash[current] !== matchCurrent) {
        match = false;
        break;
      }
      if (!patternHash[matchCurrent]) {
        patternHash[matchCurrent] = current;
      } else if (patternHash[matchCurrent] !== current) {
        match = false;
        break;
      }
    }
    if (match) {
      ans.push(words[i]);
    }
  }
  return ans;
};

findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb');

var fairCandySwap = function(A, B) {
  let aTotal = A.reduce((a, b) => a + b, 0);
  let bTotal = B.reduce((a, b) => a + b, 0);
  let ans;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let curA = A[i],
        curB = B[j];
      if (aTotal - curA + curB === bTotal - curB + curA) {
        ans = [curA, curB];
        break;
      }
    }
  }
  console.log(ans);
  return ans;
};

var sumSubseqWidths = function(A) {
  A.sort((a, b) => b - a);
  let ans = 0;
  function sub(level = 0, current = []) {
    for (let i = level; i < A.length; i++) {
      let c = A[i];
      sub(++level, [...current, c]);
    }
    console.log(current);
    if (current.length > 1) {
      ans += current[0] - current[current.length - 1];
    }
  }
  sub();
  console.log(ans);
  return ans;

  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      ans += A[j] - A[i];
    }
  }
  console.log(ans);
};

sumSubseqWidths([2, 1, 3, 4]); // 15;
sumSubseqWidths([2, 1, 3]); // 7;

let charCount = new Array(26).fill(0),
  total,
  max,
  ans = 0;

for (let j = 0; j < s.length; j++) {
  charCount = new Array(26).fill(0);
  max = { val: 0, ind: -1 };
  total = 0;
  for (let i = j; i < s.length; i++) {
    total++;
    let current = s[i].charCodeAt() - 65;
    charCount[current] += 1;
    if (charCount[current] > max.val) {
      max.val = charCount[current];
      max.ind = current;
    }
    let possible = total - max.val;
    if (possible <= k) {
      let newAns = i - j + 1;
      ans = ans > newAns ? ans : newAns;
    }
  }
}
console.log(ans);
return ans;

var characterReplacement = function(s, k) {
  let len = s.length,
    charCount = new Array(26).fill(0),
    start = 0,
    maxCount = 0,
    maxLength = 0;
  for (let i = 0; i < len; i++) {
    let current = s[i].charCodeAt() - 65;
    maxCount = Math.max(maxCount, ++charCount[current]);
    while (i - start + 1 - maxCount > k) {
      charCount[current]--;
      start++;
    }
    maxLength = Math.max(maxLength, i - start);
  }
  console.log(maxLength);
  return maxLength;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */

var surfaceArea = function(grid) {
  let ans = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      let current = grid[row][column],
        left = grid[row][column - 1] || 0,
        right = grid[row][column + 1] || 0,
        top = (grid[row - 1] && grid[row - 1][column]) || 0,
        bottom = (grid[row + 1] && grid[row + 1][column]) || 0;

      if (current > 0) {
        ans += 2;
      }
      if (current > left) {
        ans += current - left;
      }
      if (current > right) {
        ans += current - right;
      }
      if (current > top) {
        ans += current - top;
      }
      if (current > bottom) {
        ans += current - bottom;
      }
    }
  }
  return ans;
};

[[1, 2], [3, 4]];
Output: 34;

surfaceArea([[1, 2], [3, 4]]);
surfaceArea([[1, 0], [0, 2]]);
surfaceArea([[2]]);

function sortstring(str) {
  return str
    .split('')
    .sort((a, b) => a > b)
    .join('');
}

var numSpecialEquivGroups = function(A) {
  let hash = {},
    ans = 0;
  for (let str of A) {
    let even = '',
      odd = '';
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        even += str[i];
      } else {
        odd += str[i];
      }
    }
    let current = sortstring(even) + sortstring(odd);
    if (!hash[current]) {
      hash[current] = 0;
    }
    hash[current]++;
  }

  for (let key in hash) {
    ans++;
  }
  return ans;
};

numSpecialEquivGroups(['a', 'b', 'c', 'a', 'c', 'c']);
numSpecialEquivGroups(['aa', 'bb', 'ab', 'ba']);
numSpecialEquivGroups(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
numSpecialEquivGroups(['abcd', 'cdab', 'adcb', 'cbad']);

var allPossibleFBT = function(N) {
  let hash = {};
  function sub(n) {
    if (n === 1) {
    }
  }
  sub(N);
};

var FreqStack = function() {
  this.stack = [];
  this.freq = {};
};

FreqStack.createNew = function() {
  return new FreqStack();
};
/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  if (!this.freq[x]) {
    this.freq[x] = 0;
  }
  this.freq[x]++;
  this.stack.push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let maxIndex = -1,
    count = -1;
  if (this.stack.length) {
    for (let i = this.stack.length; i >= 0; i--) {
      if (this.freq[this.stack[i]] > count) {
        count = this.freq[this.stack[i]];
        maxIndex = i;
      }
    }
  }
  this.freq[this.stack[maxIndex]]--;
  return this.stack.splice(maxIndex, 1)[0];
};

let obj = Object.create(FreqStack).createNew();
obj.push(8);
obj.push(9);
obj.push(8);
obj.push(7);
obj.push(7);
obj.push(7);
console.log(obj.pop());
console.log(obj.pop());
console.log(obj);
