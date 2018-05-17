/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let left = (right = head),
    leftCounter = (rightCounter = 1);
  while (right.next) {
    right = right.next;
    rightCounter++;
    if (rightCounter - leftCounter > n) {
      left = left.next;
      leftCounter++;
    }
  }
  if (left.next) {
    console.log(left.val);
    left.next = left.next.next;
  } else {
    return [];
  }
  return head;
};

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// let a = new ListNode(1);

// removeNthFromEnd(a, 1);
// [1] 1 []
// [1,2,3,4,5]
// 2
// [1,2,3,4,5] 2 [1, 2, 3, 5]
