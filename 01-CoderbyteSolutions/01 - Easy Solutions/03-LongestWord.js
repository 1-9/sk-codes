/**
 * Created by suryatej.kotamraju on 25/03/2015.
 */

function LongestWord(sen) {
    var senArray=sen.split(" ");
    var ans="";
    var max=0;
    for (var i = 0; i < senArray.length; i++) {
        var temp=senArray[i].replace(/[^a-z][^0-9]/gi,"");
        if(temp.length>max){
            max=temp.length;
            ans=senArray[i];
        }
    }
    console.log(ans);
    return ans;
}