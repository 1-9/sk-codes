/**
 * Created by suryatej.kotamraju on 16/03/2015.
 */
function BinaryConverter(str){
    var strArray=str.split("").reverse();
    var ans=0;
    var one=0;
    if(strArray[0]==1){
        one=1;
    }
    for (var i = 1; i < strArray.length; i++) {
       if(strArray[i]==1){
           ans+=Math.pow(2,i);
       }

    }
    console.log(ans+one);
    return ans+one;
}
BinaryConverter("101");