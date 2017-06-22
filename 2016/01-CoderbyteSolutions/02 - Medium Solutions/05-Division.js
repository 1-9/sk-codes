/**
 * Created by suryatej.kotamraju on 3/14/15.
 */
function Division(num1,num2){
        var divisorsNum1 = DivisorArray(num1);
        var divisorsNum2 = DivisorArray(num2);
       var ans= FindMaxValue(divisorsNum1, divisorsNum2);
        return ans;
}
//Returns an array of all divisors for a given number
function DivisorArray(num){
    var ans=[];
    for (var i = 1; i <= num; i++) {
        if(num%i==0){
            ans.push(i);
        }
    }
    return ans;
}
//Returns the maximum value containing in both arrays arr1 and arr2
function FindMaxValue(arr1,arr2){
    var ans=0;
    if(arr1.length>arr2.length || arr1.length==arr2.length){
        arr2.forEach(function (value, index, array) {
            if(arr1.indexOf(value)!=-1){
                ans=value;
            }
        });
    }else if(arr2.length>arr1.length){
        arr1.forEach(function (value, index, array) {
            if(arr2.indexOf(value)!=-1){
                ans=value;
            }
        })
    }
    return ans;
}

Division(2,16);