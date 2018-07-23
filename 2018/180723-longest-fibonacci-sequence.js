var lenLongestFibSubseq = function(a) {
  let aSet = new Set(a),
    ans = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (aSet.has(a[i] + a[j])) {
        let temp = [a[i], a[j]];
        while (aSet.has(temp[temp.length - 1] + temp[temp.length - 2])) {
          temp.push(temp[temp.length - 1] + temp[temp.length - 2]);
        }
        ans = temp.length > ans ? temp.length : ans;
      }
    }
  }
  console.log(ans);
  return ans;
};

lenLongestFibSubseq([2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]); // 5
lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]); // 5
lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18, 29]); // 4
lenLongestFibSubseq([2, 4, 5, 6, 7, 8, 11, 13, 14, 15, 21, 22, 34]); // 5
lenLongestFibSubseq([1, 3, 4, 7, 10, 11, 12, 18, 23, 35]); // 6
