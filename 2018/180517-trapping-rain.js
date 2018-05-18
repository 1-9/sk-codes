// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

function trap(height) {
  let maxIndex = height.reduce(
    (acc, v, i, arr) => (arr[i] > arr[acc] ? i : acc),
    0
  );

  let sum = 0,
    max = 0;

  for (let i = 0; i < maxIndex; i++) {
    if (max < height[i]) {
      max = height[i];
    } else {
      sum = sum + max - height[i];
    }
  }

  max = 0;
  for (let i = height.length - 1; i > maxIndex; i--) {
    if (max < height[i]) {
      max = height[i];
    } else {
      sum = sum + max - height[i];
    }
  }
  return sum;
}

trap([1, 0, 1]);
trap([0, 0, 1]);
trap([4, 2, 3]);
trap([
  6,
  4,
  2,
  0,
  3,
  2,
  0,
  3,
  1,
  4,
  5,
  3,
  2,
  7,
  5,
  3,
  0,
  1,
  2,
  1,
  3,
  4,
  6,
  8,
  1,
  3
]);
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 0, 0]);
trap([9, 0, 0, 0, 0, 1]);
trap([0, 100, 0]);
