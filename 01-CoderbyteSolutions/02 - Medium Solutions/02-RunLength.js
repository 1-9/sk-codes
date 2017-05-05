/**
 * Created by suryatej.kotamraju on 13/03/2015.
 */
function RunLength(str) {
    //convert string to array
    var strArray=str.split("");
    var uniqueIndexes=[];

    //Filter unique values along with indexes to count repetitions
    var uniqueValues=strArray.filter(function (value, index, array) {
        if(value!=array[index+1]){
         uniqueIndexes.push(index+1);
            return value;
        }
    });

    //Calculate repetition by subtracting index positions and combine with unique values array to get the answer
    var answer=uniqueIndexes.map(function (value, index, array) {
       if(index ==0){
           return value+uniqueValues[index];
       } else if(index!=0) {
           return array[index]-array[index-1]+uniqueValues[index];
       }
    }).join("");

    console.log(answer);
    return answer;
}

RunLength("aabbcde");
