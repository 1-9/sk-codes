/**
 * Created by suryatej.kotamraju on 3/14/15.
 */
function PalindromeTwo(str){
    var goodStr=str.replace(/[^a-z]/gi,"").toLowerCase();
    var reverseGoodStr=goodStr.split("").reverse().join("");
    if(goodStr==reverseGoodStr){
        return true;
    }else if(goodStr!=reverseGoodStr){
        return false;
    }
}
PalindromeTwo("Noel-sees Leon");