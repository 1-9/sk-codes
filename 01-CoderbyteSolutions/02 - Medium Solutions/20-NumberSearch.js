/**
 * Created by suryatej.kotamraju on 3/21/15.
 */
/*1)Using replace(regex) find the number of letters and sum of numbers
* 2)Divide sum of numbers by number of letters and assign result to ans
* */
function NumberSearch(str){
    var letterCount=0;
    var numberSum=0;
    str.replace(/[a-zA-Z]/gi, function (letter) {
        letterCount++;
    }).replace(/[0-9]/gi,function(num){numberSum+=parseInt(num);});
    var ans=Math.round(numberSum/letterCount);
//console.log(numberSum);
//console.log(letterCount);
//console.log(ans);
    if(numberSum==0){
        return 0;
    }else  return ans;
}
NumberSearch("Two Houses");
