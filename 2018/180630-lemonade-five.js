/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let change = {};

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
    } else if (bills[i] === 10 && change[5]) {
      change[5] -= 1;
    } else if (bills[i] === 20 && change[10] && change[5]) {
      change[5] -= 1;
      change[10] -= 1;
    } else if (bills[i] === 20 && change[5] > 2) {
      change[5] -= 3;
    } else {
      ans = false;
      return false;
    }
    if (change[bills[i]]) {
      change[bills[i]] += 1;
    } else {
      change[bills[i]] = 1;
    }
  }
  return true;
};

lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]); // false
lemonadeChange([5, 5, 5, 10, 20]); // true
lemonadeChange([5, 5, 5, 10, 10]); // true
lemonadeChange([10, 10]); // false
