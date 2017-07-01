/**
 * Created by suryatej.kotamraju on 25/03/2015.
 */
function FirstReverse(str) {
    str = str.split("").reverse().join("");
    console.log(str);
    return str;
}
FirstReverse("Hello world parameter");