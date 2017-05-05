/**
 * Created by suryatej.kotamraju on 3/24/15.
 */
/**
 * 1)Using string replace find all matching alphabets and replace with index values
 * 2)Return string with replaced values
 * **/
function NumberEncoding(str){
    var alpha="abcdefghijklmnopqrstuvwxyz";
    var ans=str.replace(/[a-z]/gi, function (value) {
        return alpha.indexOf(value)+1;
    });
    console.log(ans);
    return(ans);
}
NumberEncoding("jaj-a");