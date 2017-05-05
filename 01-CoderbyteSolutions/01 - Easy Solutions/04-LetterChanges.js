/**
 * Created by suryatej.kotamraju on 25/03/2015.
 */
function LetterChanges(str){
    var y = str.toLowerCase().split("");
    var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var z = y.map(function (ind) {
        if(ind=="z"||ind=="Z"){
            ind="A";
        }else if(alpha.indexOf(ind)!=-1) {
            ind = alpha[alpha.indexOf(ind) + 1];
        }return ind;
    }) ;

    var ans = z.map(function (fin) {
        if(fin=="a"||fin=="e"||fin=="i"||fin=="o"||fin=="u"){
            return fin.toUpperCase();
        }
        else return fin;
    });
    var final= ans.join("").toString();
    console.log(final);
    return final;
}