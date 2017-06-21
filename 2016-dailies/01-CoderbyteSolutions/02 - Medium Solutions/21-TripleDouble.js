/**
 * Created by suryatej.kotamraju on 3/21/15.
 */
/*1)Using regex find a match for 3 or more num1's and 2 or more num2's
* 2)Created a function to reduce the repeated match to single number
* 3)Find if the firstNum value exists in secondNum if it does return 1 else 0
* */

 function TripleDouble(num1,num2){
    var firstNum=num1.toString().match(/(\d)\1{2,100}/g);
    var secondNum=num2.toString().match(/(\d)\1{1,100}/g);
     var ans=0;
     if(firstNum!=null) {
         firstNum = filterArray(firstNum);
     }else if(firstNum==null) {console.log(ans); return ans;};
     if(secondNum!=null) {
         secondNum = filterArray(secondNum);
     }else if(secondNum==null) {console.log(ans); return ans;}

    for (var i = 0; i < firstNum.length; i++) {
        if(secondNum.indexOf(firstNum[i])!=-1){
            ans=1;
        }
    }
    console.log(ans);
    return(ans);
}
function filterArray(array){
    var ans=[];
  array.filter(function (value) {
          var temp=value.toString().split("");
           ans.push(temp[0]);
    });
    return ans;
}

TripleDouble(86888,7880);
