var levelOrder = function(root) {
  let ans = [];

  function sub(node, level = 0) {
    if (node !== null) {
      if (!ans[level]) {
        ans[level] = [];
      }
      ans[level].push(node.val);
      level++;
      if (node.left) {
        sub(node.left, level);
      }
      if (node.right) {
        sub(node.right, level);
      }
    }
  }
  sub(root);
  return ans;
};

var singleNumber = function(nums) {
  let word = {};
  for (let num of nums) {
    if (!word[num]) {
      word[num] = 1;
    } else if (word[num] === 1) {
      word[num] = 2;
    } else if (word[num] === 2) {
      delete word[num];
    }
  }
  for (let key in word) {
    return parseInt(key);
  }
};

singleNumber([0, 1, 0, 1, 0, 1, 99]);

var addTwoNumbers = function(l1, l2) {
  let s1 = [],
    s2 = [],
    carry = 0;
  while (l1) {
    s1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    s2.push(l2.val);
    l2 = l2.next;
  }

  let ans = [];

  while (s1.length || s2.length) {
    let current = 0;
    if (s1.length) {
      current += s1.pop();
    }
    if (s2.length) {
      current += s2.pop();
    }
    if (carry !== undefined) {
      current += carry;
      carry = 0;
    }
    if (current > 9) {
      current = current % 10;
      carry = 1;
    }
    ans.push(current);
  }
  if (carry) ans.push(carry);

  let retAns = (currentNode = new ListNode(ans.pop()));

  while (ans.length) {
    currentNode.next = new ListNode(ans.pop());
    currentNode = currentNode.next;
  }

  return retAns;
};

let word = {};
for (let i = 0; i < a.length; i++) {
  if (!word[a[i]]) {
    word[a[i]] = 0;
  }
  word[a[i]]++;
}
console.log(word);

var numberOfArithmeticSlices = function(a) {
  let ans = 0;
  function sub(current = [], level = 0) {
    for (let i = level; i < a.length; i++) {
      if (
        current.length < 2 ||
        current[1] - current[0] === a[i] - current[current.length - 1]
      ) {
        sub([...current, a[i]], ++level);
      }
    }
    if (current.length >= 3) {
      ans++;
    }
  }
  sub();
  console.log(ans);
  return ans;
};

numberOfArithmeticSlices([2, 4, 6, 8, 10]);
numberOfArithmeticSlices([
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
]);

var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i]) {
      if (
        (i === 0 && !flowerbed[i + 1]) ||
        (i === flowerbed.length - 1 && !flowerbed[flowerbed.length - 2]) ||
        (!flowerbed[i - 1] && !flowerbed[i + 1])
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
    if (n <= 0) {
      return true;
    }
  }
  return false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([0], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));

var uncommonFromSentences = function(A, B) {
  let allWords = A.split(' ').concat(B.split(' ')),
    word = {},
    deletedWord = {};

  for (let i = 0; i < allWords.length; i++) {
    let curr = allWords[i];
    if (!word[curr] && !deletedWord[curr]) {
      word[curr] = true;
    } else {
      deletedWord[curr] = true;
      delete word[curr];
    }
  }
  return Object.keys(word);
};

uncommonFromSentences('this apple is sweet', 'this apple is sour');
uncommonFromSentences('apple apple', 'banana');
uncommonFromSentences('s z z z s', 's z ejt');
