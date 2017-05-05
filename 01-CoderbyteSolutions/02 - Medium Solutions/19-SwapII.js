/**
 * Created by suryatej.kotamraju on 20/03/2015.
 */
/**
 * 1) Invert the cases of the given string, using map function.
 * 2) Using replace pass the matching pattern(digit/letter(s)/digit) to a function
 *    swapNumbers which rearranges the starting and ending number
 * 3) Return the value back for the final answer
 *
 **/
function SwapII(str){
    str =str.split("");
    str=str.map(function (value, index, array) {
        if(value==value.toUpperCase()){
            return value.toLowerCase();
        }else if(value==value.toLowerCase()){
            return value.toUpperCase();
        }else return value;
    });
    str =str.join("");
    var matchStr=str.replace(/\d{1}[a-zA-Z]+\d{1}/gi, function swapNumbers(str){
        var strArray=str.split("");
        var first=strArray.shift();
        var last = strArray.pop();
        strArray.unshift(last);
        strArray.push(first);
        return(strArray.join(""));
        //console.log(strArray.join(""));
    });
   return(matchStr);
    console.log(matchStr);
}

SwapII("6Hello4 -8World, 7 yes3");