var minEatingSpeed = function(piles, H) {
  let min = 0,
    max = 1000000000,
    totalHours = 0;

  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    totalHours = 0;

    for (let i = 0; i < piles.length; i++) {
      totalHours += Math.ceil(piles[i] / middle);
    }

    if (totalHours <= H) {
      max = middle;
    } else {
      min = middle + 1;
    }
  }
  return min;
};

minEatingSpeed([3, 6, 7, 11], 8); // 4
minEatingSpeed([30, 11, 23, 4, 20], 5); // 30
minEatingSpeed([30, 11, 23, 4, 20], 6); // 23
