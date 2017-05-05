/**
 * Created by suryatej.kotamraju on 3/14/15.
 */
function StringScramble(str1,str2){
    //Convert str1 & str2 into arrays
    var arr1=str1.split("");
    var arr2=str2.split("");
    var removedCount=0;
    //For each value in arr2 check if indexof() str1 is true
    for (var i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i])!=-1){
            removedCount++;
            var temp=arr1.indexOf(arr2[i]);
            arr1.splice(temp,1);
        }
    }
    if(removedCount==arr2.length){
    console.log(true);
        return true;
    }else if (removedCount!=arr2.length){
        console.log(false);
        return false;
    }
}
StringScramble("wni3er","winner");