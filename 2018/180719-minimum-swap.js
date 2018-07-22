var minSwap = function(A, B) {
  let dp = new Array(A.length).fill().map(_ => new Array(2));
  dp[A.length - 1][0] = 0;
  dp[A.length - 1][1] = 1;

  for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] < A[i + 1] && B[i] < B[i + 1]) {
      if (A[i] < B[i + 1] && B[i] < A[i + 1]) {
        dp[i][0] = Math.min(dp[i + 1][0], dp[i + 1][1]);
        dp[i][1] = Math.min(dp[i + 1][1] + 1, dp[i + 1][0] + 1);
      } else {
        dp[i][0] = dp[i + 1][0];
        dp[i][1] = dp[i + 1][1] + 1;
      }
    } else {
      dp[i][0] = dp[i + 1][1];
      dp[i][1] = dp[i + 1][0] + 1;
    }
  }

  console.log(dp);
  return Math.min(dp[0][0], dp[0][1]);
};

minSwap([1, 3, 5, 4], [1, 2, 3, 7]);

minSwap([0, 4, 4, 5, 9], [0, 1, 6, 8, 10]);

minSwap([3, 3, 8, 9, 10], [1, 7, 4, 6, 8]);

// public static int minSwap(int[] A, int[] B) {
//  int[][] dp = new int[A.length][2];
//   dp[A.length - 1][0] = 0;
//   dp[A.length - 1][1] = 1;
//   for (int i = A.length - 2; i >= 0; i --) {
//     if (A[i] < A[i + 1] && B[i] < B[i + 1]) {
//       if (A[i] < B[i + 1] && B[i] < A[i + 1]) {
//         dp[i][0] = Math.min(dp[i + 1][0], dp[i + 1][1]);
//         dp[i][1] = Math.min(dp[i + 1][1] + 1, dp[i + 1][0] + 1);
//       } else {
//         dp[i][0] = dp[i + 1][0];
//         dp[i][1] = dp[i + 1][1] + 1;
//       }
//     } else {
//       dp[i][0] = dp[i + 1][1];
//       dp[i][1] = dp[i + 1][0] + 1;
//     }
//   }
//   return Math.min(dp[0][0], dp[0][1]);
// }
