var getIntersectionNode = function(headA, headB) {
  let ans = null;
  let startA = headA,
    startB = headB;

  while (startA.next) {
    startA.next.prevA = startA;
    startA = startA.next;
  }

  while (startB.next) {
    startB.next.prevB = startB;
    startB = startB.next;
  }

  while (startA.val === startB.val) {
    ans = startA;
    oldStartB = startB;
    oldStartA = startA;
    startB = startB.prevB;
    startA = startA.prevA;
    delete oldStartA.prevA;
    delete oldStartB.prevB;
  }

  while (startA) {
    oldStartA = startA;
    startA = startA.prevA;
    delete oldStartA.prevA;
  }

  while (startB) {
    oldStartB = startB;
    startB = startB.prevA;
    delete oldStartB.prevB;
  }

  return ans;
};

var rotate = function(nums, k) {
  while (k > 0) {
    let last = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = last;
    k--;
  }
  return nums;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
rotate([-1, -100, 3, 99], 2);
