/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(mountain) {
  let state = 'none',
    i = 0,
    peak;
  while (i < mountain.length) {
    switch (state) {
      case 'none':
        if (mountain[i] < mountain[i + 1]) {
          state = 'rise';
          peak = i + 1;
        }
        break;
      case 'rise':
        if (mountain[i] < mountain[i + 1]) {
          peak = i + 1;
        } else {
          state = 'fall';
          end = i;
        }
        break;
      case 'fall':
        if (mountain[i] > mountain[i + 1]) {
          end = i + 1;
        } else {
          state = 'rise';
        }
        break;
    }
    i++;
  }
  return peak;
};

peakIndexInMountainArray([0, 2, 1, 0, -1, 2, 5, 8, 7, 6, 5, 3, 9, 11, 10]); // 13
peakIndexInMountainArray([0, 1, 0]); // 1
peakIndexInMountainArray([0, 2, 1, 0]); // 1
