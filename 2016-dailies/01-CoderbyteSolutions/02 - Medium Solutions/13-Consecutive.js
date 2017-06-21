/**
 * Created by suryatej.kotamraju on 17/03/2015.
 */
function Consecutive(arr){
arr.sort(function (a, b) {
     return a-b;
 });

    var max=arr[arr.length-1];
    var min = arr[0];
   var consecutiveArr=[];
    for (var i = min; i < max; i++) {
        if(arr.indexOf(i)==-1){
            consecutiveArr.push(i);
        }
    }
    return consecutiveArr.length;
    console.log(consecutiveArr.length);
}
Consecutive([5,1,13]);