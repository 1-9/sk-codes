/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2, ans = new ListNode(0), dummy = ans) {
  if (l1 && l2) {
    if (l1.val < l2.val) {
      dummy.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if (l2.val <= l1.val) {
      dummy.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    dummy = dummy.next;
    mergeTwoLists(l1, l2, ans, dummy);
  } else {
    if (l1 === null) {
      dummy.next = l2;
    }
    if (l2 === null) {
      dummy.next = l1;
    }
  }
  return ans.next;
};
