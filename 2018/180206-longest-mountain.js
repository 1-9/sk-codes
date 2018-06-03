/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A, ans = 0) {
  for (let i = 0; i < A.length; i++) {
    let leftPotential = leftHelper(A, i);
    let rightPotential = rightHelper(A, i);
    if (
      leftPotential &&
      rightPotential &&
      ans < leftPotential + rightPotential
    ) {
      ans = leftPotential + rightPotential;
    }
  }
  if (ans > 0) {
    ans++;
  }
  return ans;
};

function rightHelper(A, ind) {
  let i = ind;
  while (A[i + 1] < A[i]) {
    i++;
  }
  return i - ind;
}

function leftHelper(A, ind) {
  let i = ind;
  while (A[i - 1] < A[i]) {
    i--;
  }
  return ind - i;
}

longestMountain([2, 2, 2]); // 0
longestMountain([3, 2]); // 0
longestMountain([2, 1, 4, 7, 3, 2, 5]); // 5
