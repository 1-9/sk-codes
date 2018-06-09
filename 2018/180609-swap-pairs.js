/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let dummy = (ans = new ListNode(0));
  while (head && head.next) {
    dummy.next = new ListNode(head.next.val);
    dummy.next.next = new ListNode(head.val);
    head = head.next.next;
    dummy = dummy.next.next;
  }
  if (head) dummy.next = new ListNode(head.val);
  return ans.next;
};
