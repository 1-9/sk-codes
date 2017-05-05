/**
 * Created by suryatej.kotamraju on 3/18/15.
 */
function PermutationStep(num) {
    var numArray=num.toString().split("");
    var sortIndex=-1;
    for (var i = numArray.length - 1; i >= 0; i--) {
        if(numArray[i]>numArray[i-1]){
            sortIndex=i;
            var temp=numArray[i];
            numArray[i]=numArray[i-1];
            numArray[i-1]=temp;
            break;
        }
    }
    if(sortIndex!=-1){
    var tempArray=numArray.splice(sortIndex,numArray.length);
    tempArray.sort(function (a, b) {
        return a-b;
    });
    }

    if( sortIndex==-1 || (num==(numArray.join("").toString()+tempArray.join("").toString()))){
       return -1;
        console.log("-1");

    }else return numArray.join("").toString()+tempArray.join("").toString();
        console.log(numArray.join("").toString()+tempArray.join("").toString());
}
PermutationStep(76666766);


