var searchRange = function(nums, target) {
  let ind = binarySearch(nums, target);
  console.log(ind);
};

function binarySearch(nums, target) {
  let l = 0,
    r = nums.length,
    ans = -1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] > target) {
      r = m + 1;
    } else if (nums[m] < target) {
      l = m - 1;
    } else {
      ans = m;
      break;
    }
  }
  return ans;
}

searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8);
// searchRange([5, 7, 7, 8, 8, 10], 10);
// searchRange([5, 7, 7, 8, 8, 10], 5);
// searchRange([5, 7, 7, 8, 8, 10], 99);
searchRange([5, 7, 7, 8, 8, 10], 6);

var middleNode = function(head) {
  let length = 1,
    middle = 0,
    ans = head;
  while (head.next) {
    length++;
    head = head.next;
  }

  middle = Math.ceil(length / 2);
  let findMiddle = 0;
  while (findMiddle !== middle) {
    ans = ans.next;
    findMiddle++;
  }
  return ans;
};

var stoneGame = function(piles) {
  let alex = 0,
    lee = 0,
    start = 0,
    end = piles.length - 1,
    alexTurn = true;

  while (start < end) {
    if (alexTurn) {
      if (piles[start] > piles[end]) {
        alex += piles[start];
        start++;
      } else {
        alex += piles[end];
        end--;
      }
      alexTurn = false;
    } else {
      if (piles[start] > piles[end]) {
        lee += piles[end];
        end--;
      } else {
        lee += piles[start];
        start++;
      }
      alexTurn = true;
    }
  }

  // console.log(alex, lee);
  return alex > lee;
};

var profitableSchemes = function(G, P, group, profit) {
  let ans = 0;
  let ps = powerset(new Array(profit.length).fill(0).map((v, i) => i));

  for (s of ps) {
    let pro = 0,
      pe = G;
    for (v of s) {
      pro += profit[v];
      pe -= group[v];
    }
    if (pro >= P && pe >= 0) {
      ans++;
    }
  }
  console.log(ans);
  return ans;
};

function powerset(ary) {
  var ps = [[]];
  for (var i = 0; i < ary.length; i++) {
    for (var j = 0, len = ps.length; j < len; j++) {
      ps.push(ps[j].concat(ary[i]));
    }
  }
  return ps;
}

profitableSchemes(10, 1, [7, 1, 9, 1, 9], [1, 2, 2, 1, 0]);
profitableSchemes(
  1,
  1,
  [1, 1, 1, 1, 2, 2, 1, 2, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 0, 2, 2]
);
profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]);
profitableSchemes(5, 3, [2, 2], [2, 3]);
profitableSchemes(1, 1, [2, 2, 2, 2, 2], [1, 2, 1, 1, 0]);
profitableSchemes(5, 3, [2, 2], [2, 3]);

function pickWinner(count) {
  if (count === 0) {
    return false;
  } else if (count <= 2) {
    return true;
  } else if (count === 3) {
    return false;
  } else {
    let c1 = pickWinner(count - 1);
    let c2 = pickWinner(count - 2);
    return !c1 || !c2;
  }
}

console.log(pickWinner(0));
console.log(pickWinner(1));
console.log(pickWinner(3));
console.log(pickWinner(4));
console.log(pickWinner(12));
