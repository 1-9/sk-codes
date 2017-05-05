/**
 * Created by suryatej.kotamraju on 16/03/2015.
 */
function LetterCount(str){
    var strArray=str.split(" ");
    var repetitionArray=[];
    var ansIndex=-1;
    var max=0;
    for (var i = 0; i < strArray.length; i++) {
        repetitionArray.push(findRepetitions(strArray[i]));
    }
    for (var i = 0; i < repetitionArray.length; i++) {
        if(repetitionArray[i]>max){
            max=repetitionArray[i];
            ansIndex=i;
        }
    }
    if(ansIndex!=-1) {
        console.log(strArray[ansIndex]);
        return strArray[ansIndex];
    }else console.log(-1); return -1;
}

function findRepetitions(str){
    var temp=str.toLowerCase().split("");
    var letterCount=[];
    var uniqueLetters=temp.filter(function (value, index, array) {
       return array.indexOf(value)==index;
    });
    for (var i = 0; i < uniqueLetters.length; i++) {
        if(temp.filter(function (value, index, array) {
                return value==uniqueLetters[i];
            }).length>1) {
            letterCount.push(temp.filter(function (value, index, array) {
                return value == uniqueLetters[i];
            }).length);
        }
    }
    if(letterCount.length!=0) {
        var ans = letterCount.reduce(function (a, b) {
            return a + b;
        });
        return ans;
    }else return 0;
}
LetterCount("Today, is the greatest day period!");
