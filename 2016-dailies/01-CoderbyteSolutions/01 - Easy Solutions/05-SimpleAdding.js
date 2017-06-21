/**
 * Created by suryatej.kotamraju on 25/03/2015.
 */
function SimpleAdding(num){
    var ans = 0;
    while(num >=1){
        ans +=num;
        num--;
    }
    console.log(ans);
    return ans;
}