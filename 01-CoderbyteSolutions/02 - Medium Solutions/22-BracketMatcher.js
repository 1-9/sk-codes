/**
 * Created by suryatej.kotamraju on 3/21/15.
 */
/**
* 1)Using regex find the left and right brackets surrounded with text
* 2)Continue replacing the pattern until there is no matching
* 3)If there are still brackets left in the string return 0 else 1
**/
function BracketMatcher(str){
    while (str.match(/\([^(]?\)|\([a-z A-Z]+\)/g)!=null) {
        str = str.replace(/\([^(]?\)|\([a-z A-Z]+\)/g, "lb");
    }
    console.log(str);
    if(str.indexOf(")")!=-1 || str.indexOf("(")!=-1){
        console.log(0);
        return 0;
    }else {
        console.log(1);
        return 1;
    }
}
BracketMatcher("the color re(d))()(()");
//BracketMatcher("(coder)(byte))");
//BracketMatcher("(c(oder)) b(yte)");
//BracketMatcher("(hello (world))");


