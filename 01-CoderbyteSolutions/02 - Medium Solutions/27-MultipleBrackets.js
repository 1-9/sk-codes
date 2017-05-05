/**
 * Created by suryatej.kotamraju on 23/03/2015.
 */
/**
 * 1)Using regex replace all the matching patters until there is no matching
 * 2)If the brackets still exist pattern didnot match return 0
 * 3)If there are no brackets using str find the count of ( and [ to get pair count
 * 4)Return 1 along with bracket pair count
 * **/
function MultipleBrackets(str){
    var matchStr=str;
    while(matchStr.match(/\([^(|[|\]]?\)|\([a-z A-Z0-9]+\)|(\[[a-z A-Z0-9]+\])/gi)!=null){
    matchStr=matchStr.replace(/\([^(|[|\]]?\)|\([a-z A-Z0-9]+\)|(\[[a-z A-Z0-9]+\])/gi,"lb");
    }
    var bracketCount=0;
    if(matchStr.indexOf("(")!=-1||matchStr.indexOf(")")!=-1||matchStr.indexOf("[")!=-1||matchStr.indexOf("]")!=-1)
    {
        console.log(0);
        return 0;
    }else {
        str=str.replace(/\(|\[/gi, function (bracket) {
            bracketCount++;
            return bracket;
        });
        console.log(1+" "+bracketCount);
        return 1+" "+bracketCount;
    }

    console.log(matchStr);
}

MultipleBrackets("01()01()01()[10]");