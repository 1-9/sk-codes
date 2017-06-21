/**
 * Created by suryatej.kotamraju on 3/24/15.
 */
/**
 * 1)Loop through arr and populate ans[] if arr has a repeated value
 * 2)Return length of ans
 * **/
function DistinctList(arr){
    var ans=[];
    for (var i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i])!=i){
            ans.push(arr[i]);
        }
    }
    console.log(ans.length);
    return(ans.length);
}
DistinctList([-2,-2,5,5,5]);