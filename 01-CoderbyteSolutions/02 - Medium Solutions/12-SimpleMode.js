/**
 * Created by suryatej.kotamraju on 17/03/2015.
 */
function SimpleMode(arr){
    var uniqueArr=[];
    for (var i = 0; i < arr.length; i++) {
        if(i==arr.indexOf(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    var countArr=[];
    for (var i = 0; i < uniqueArr.length; i++) {
        countArr.push(arr.filter(function (value, index, array) {
            return (value==uniqueArr[i]);
        }).length);
    }
    var max=1;
    var ansIndex=-1;
    for (var i = 0; i < countArr.length; i++) {
        if(countArr[i]>max){
            max=countArr[i];
            ansIndex=i;
        }
    }
    if(ansIndex==-1){
        return ansIndex;
        console.log(ansIndex);
    }else return uniqueArr[ansIndex];
     console.log(uniqueArr[ansIndex]);
}
SimpleMode([1,2]);
