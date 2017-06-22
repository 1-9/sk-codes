/**
 * Created by suryatej.kotamraju on 3/22/15.
 */
/**
* 1)Check if the string matches ab|ba, bc|cb, ac|ca
* 2)Replace the matches according to the problem
* 3)Repeat the process until there are no further matches
**/
function StringReduction(str) {
    while(str.match(/ab|ba|ac|ca|bc|cb/gi)!=null) {
         str = str.replace(/ab|ba|ac|ca|bc|cb/gi, function (str) {
            if(str=="ab" || str=="ba"){
                return "c";
            }else if(str=="ac" || str=="ca"){
                return "b";
            }else if(str=="bc" || str=="cb"){
                return "a";
            }
        });
    }
    console.log(str);
    return(str.length);
}
StringReduction("bcab");