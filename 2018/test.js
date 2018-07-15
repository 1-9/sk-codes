// var binaryGap = function(num) {
//   let numString = Number(num).toString(2);
//   let ans = 0,
//     left = -1,
//     right = -1;
//   for (let i = 0; i < numString.length; i++) {
//     if (numString[i] === '1') {
//       if (left < 0) {
//         left = i;
//       } else {
//         ans = i - left > ans ? i - left : ans;
//         left = i;
//       }
//     }
//   }
//   return ans;
// };

// binaryGap(6);
// binaryGap(8);
// binaryGap(22);
// binaryGap(5);

// var reorderedPowerOf2 = function(num) {
//   let numString = num.toString(),
//     ans = false;
//   function sub(str, current) {
//     if (current.length === numString.length) {
//       console.log(current);
//       if (power_of_2(current)) {
//         return true;
//       }
//     } else {
//       for (let i = 0; i < str.length; i++) {
//         if ((!current.length && str[i] !== '0') || current.length) {
//           let temp = str[i];
//           current += temp;
//           str = str.slice(0, i) + str.slice(i + 1);
//           sub(str, current);
//           str = str.slice(0, i) + temp + str.slice(i);
//           current = current.slice(0, current.length - 1);
//         }
//       }
//     }
//   }
//   sub(numString, '');
//   return ans;
// };

// function power_of_2(n) {
//   n = parseInt(n);
//   return n && (n & (n - 1)) === 0;
// }

// reorderedPowerOf2(1);
// reorderedPowerOf2(268341);
// reorderedPowerOf2(16);
// reorderedPowerOf2(42);

var advantageCount = function(a, b) {
  let ans = [];
  a.sort((a, b) => a - b);

  b.forEach(v => {
    if (v > a[0] && v < a[a.length - 1]) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] > v) {
          ans.push(a[i]);
          a.splice(i, 1);
          break;
        }
      }
    } else if (v < a[0]) {
      ans.push(a[0]);
      a.shift();
    } else if (v > a[a.length - 1]) {
      ans.push(a[a.length - 1]);
      a.pop();
    }
  });
  console.log(ans);
};

// advantageCount([12, 24, 8, 32], [13, 25, 32, 11]);
// advantageCount([2, 7, 11, 15], [1, 10, 4, 11]);
// advantageCount([5621, 1743, 5532, 3549, 9581], [913, 9787, 4121, 5039, 1481]);
// advantageCount([0], [0]);
advantageCount([2, 0, 4, 1, 2], [1, 3, 0, 0, 2]);
// 2 0 2 1 4
