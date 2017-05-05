var addTwoNumbers = function (l1, l2) {
  var ans, ansTail, current, carry, l1Valid, l2Valid;
  add(l1.val, l2.val);
  ans = new ListNode(current);
  ansTail = ans;

  while (l1.next || l2.next) {
    if (l1.next && l2.next) {
      add(l1.next.val, l2.next.val);
      ansTail.next = new ListNode(current);
      ansTail = ansTail.next;
      l1.next = l1.next.next;
      l2.next = l2.next.next;
    } else if (!l2.next || !l1.next) {
      l1Valid = l1.next ? true : false;
      l2Valid = l2.next ? true : false;
      if (l1Valid) {
        add(l1.next.val);
        ansTail.next = new ListNode(current);
        ansTail = ansTail.next;
        l1.next = l1.next.next;
      } else {
        add(l2.next.val);
        ansTail.next = new ListNode(current);
        ansTail = ansTail.next;
        l2.next = l2.next.next;
      }
    }
  }

  function add(n1, n2) {
    var temp;
    n1 = n1 || 0;
    n2 = n2 || 0;
    temp = n1 + n2;
    if (carry) {
      temp = carry + temp;
      carry = undefined;
    }
    if (temp > 9) {
      var tempArray = temp.toString().split('');
      current = parseInt(tempArray[1]);
      carry = parseInt(tempArray[0]);
    } else {
      current = temp;
    }
  }
  if (carry) {
    ansTail.next = new ListNode(carry);
  }
  return ans;
};
