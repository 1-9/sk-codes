function leftRotate(arr, rotate) {

  /////////////////////////////////////////////////
  // imperative                                  //
  // let ans = [];                               //
  // for (var i = arr.length - 1; i >= 0; i--) { //
  //   if (i >= rotate) {                        //
  //     ans[i - rotate] = arr[i];               //
  //   } else {                                  //
  //     ans[i - rotate + arr.length] = arr[i];  //
  //   }                                         //
  // }                                           //
  // return ans.join(' ');                       //
  /////////////////////////////////////////////////

  // trying declarative/functional
  return arr.map((v, i) => {
    return i >= rotate ? [arr[i], i - rotate] : [arr[i], i - rotate + arr.length];
  }).sort((a, b) => a[1] - b[1]).map(v => v[0]).join(' ');
}

console.log(14, '170320-left-rotation.js', leftRotate([1, 2, 3, 4, 5], 4));
