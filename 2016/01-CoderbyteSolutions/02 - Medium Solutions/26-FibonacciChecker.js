/**
 * Created by suryatej.kotamraju on 3/22/15.
 */
/**
 * 1)Until the last number of the fibonacci array is smaller than the num parameter
 * 2)Find the next number in the series and push it into the fibonacci array
 * 3)If the last value is equal to the num parameter || num less than 2 return yes or no
**/
function FibonacciChecker(num){
    var fArray=[0,1,2];
    while(fArray[fArray.length-1]<num){
        fArray.push(fArray[fArray.length-1]+fArray[fArray.length-2]);
    }
    if(fArray[fArray.length-1]==num||num<=2){
        return "yes";
        //console.log("yes");
    }else {
        return "no";
        //console.log("no");
    }
}
FibonacciChecker(34);