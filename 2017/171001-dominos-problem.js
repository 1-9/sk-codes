function solution(A) {
  var copyA = () =>
      A.reduce((acc, val, ind) => {
        if (ind % 2 === 0 && A[ind + 1]) {
          acc.push([val, A[ind + 1]]);
        }
        return acc;
      }, []),
    ans = [];

  function sub(arrCopy, builder) {
    if (builder.length === arrCopy.length) {
      ans.push(builder);
    } else {
      for (var i = 0; i < arrCopy.length; i++) {
        var copy = arrCopy
          .slice(0, i)
          .concat(arrCopy.slice(i + 1))
          .concat(arrCopy[i]);
        builder.indexOf(arrCopy[i]) < 0
          ? sub(copy, arrCopy[i].concat(builder))
          : "";
      }
    }
  }
  sub(copyA(), []);
  console.log(ans.length, ans);
}

let test = [4, 3, 3, 4, 1, 2, 2, 3, 6, 5, 4, 5];
solution(test);
