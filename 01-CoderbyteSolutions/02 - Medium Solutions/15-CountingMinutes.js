/**
 * Created by suryatej.kotamraju on 18/03/2015.
 */
function CountingMinutes(str){
var splitTime=str.split("-");
    var minutesArray=[];
    for (var i = 0; i < splitTime.length; i++) {
        minutesArray.push(minuteConversion(splitTime[i]));
    }
    var probableAns=minutesArray[1]-minutesArray[0];
    if(probableAns<0){
        return probableAns+1440;
        console.log(probableAns+1440);
    }else return probableAns; console.log(probableAns);
}
function minuteConversion(str){
    var rearrangeMinute=str.replace(/[:]/gi,"*").replace(/[a]/gi,"*a").replace(/[p]/gi,"*p").replace(/[m]/gi,"");
    var strArray=rearrangeMinute.split("*");
    if(strArray[2]=="a" && strArray[0]==12){
        strArray[0]=0;
    }else if(strArray[2]=="a" && strArray[0]!=12){
        strArray[0]=strArray[0]*60;
    }
    if(strArray[2]=="p" && strArray[0]<12){
        strArray[0]=(parseInt(strArray[0])+12)*60;
    }else if(strArray[2]=="p" && strArray[0]==12){
        strArray[0]=strArray[0]*60;
    }
//    console.log(parseInt(strArray[0])+parseInt(strArray[1]));
    return parseInt(strArray[0])+parseInt(strArray[1]);
}

CountingMinutes("9:00am-10:08am");