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
  let newNode = { next: head },
    follower = newNode;
  while (head.next !== null) {
    head = head.next;
    n--;
    if (n <= 0) {
      follower = follower.next;
    }
  }
  follower.next = follower.next.next;
  return newNode.next;
};
