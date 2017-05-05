/**
 * Created by suryatej.kotamraju on 3/22/15.
 */
/**
 * 1)Find all the multiples of 3 or 5 less than the num and add them to an array
 * 2)If array is not empty using reduce calculate the sum of values in array
 * 3)If array is empty return 0 else answer
**/
function ThreeFiveMultiples(num){
    var arr=[];
    for (var i = 1; i < num; i++) {
        if(i%5==0 || i%3==0){
            arr.push(i);
        }
    }
    if(arr.length!=0) {
        var ans = arr.reduce(function (a, b) {
            return a + b;
        });
    }else ans=0;
    console.log(ans);
    return ans;
}
ThreeFiveMultiples(1);