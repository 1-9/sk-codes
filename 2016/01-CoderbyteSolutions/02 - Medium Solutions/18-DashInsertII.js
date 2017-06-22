/**
 * Created by suryatej.kotamraju on 20/03/2015.
 */
function DashInsertII(num){
    var numArray = num.toString().split("");
    var ansArray=numArray.map(function (value, index, array) {
       if(value%2==0 && array[index+1]%2==0 && value!=0 && array[index+1]!=0 && index!=array.length-1){
           return value+"*";
       }else if (value%2!=0 & array[index+1]%2!=0 && value!=0 && array[index+1]!=0 && index!=array.length-1){
            return value+"-";
        }else return value;
    });
    return(ansArray.join(""));
    console.log(ansArray.join(""));
}
DashInsertII(10120);