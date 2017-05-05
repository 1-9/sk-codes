/**
 * Created by suryatej.kotamraju on 3/24/15.
*/
function OptimalAssignments(strArr){
    var indexArray=[];
    var matrixObject={};
    for (var i = 0; i < strArr.length; i++) {
        matrixObject[i+1]=strArr[i].toString().replace(/[\(\)]/gi," ").split(",");
    }
    var ans=[];
    for (var key in matrixObject) {
        ans.push(returnSmallest(matrixObject[key]));
    }
    function returnSmallest(arr){
        var min=Infinity;
        var ind=-1;
        for (var i = 0; i < arr.length; i++) {
            arr[i]=parseInt(arr[i]);
            if(arr[i]<min && indexArray.indexOf(i+1)==-1 ){
                min=arr[i];
                ind=i+1;
            }
        }
        indexArray.push(ind);
    }
    var assignment=[];
    for (var i = 0; i < indexArray.length; i++) {
        var x=1;
        assignment.push("("+x+"-"+indexArray[i]+")");

    }
    console.log(indexArray);
    console.log(matrixObject);
    console.log(assignment.toString().replace(/,/g,""));
    return(assignment.toString().replace(/,/g,""));
}
//OptimalAssignments(["(13,4,7,6)","(1,1,5,4)","(6,7,2,8)","(1,3,5,9)"]);
//OptimalAssignments(["(5,4,2)","(12,4,3)","(3,4,13)"]);
OptimalAssignments(["(1,2,1)","(4,1,5)","(5,2,1)"]);

//var x ={a:2,b:8,c:[3,4,5]};
//console.log(x["c"]);