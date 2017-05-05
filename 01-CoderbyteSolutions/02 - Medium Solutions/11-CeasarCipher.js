/**
 * Created by suryatej.kotamraju on 16/03/2015.
 */
function CeasarCipher(str,num){
    var alphabetArray=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var strArray=str.split("");

    for (var i = 0; i < strArray.length; i++) {
        if (strArray[i] != strArray[i].toLowerCase() && alphabetArray.indexOf(strArray[i].toLowerCase()) != -1) {
            if( alphabetArray[alphabetArray.indexOf(strArray[i].toLowerCase()) + num]==undefined ){
                strArray[i] = alphabetArray[(alphabetArray.indexOf(strArray[i].toLowerCase())) + num-26].toUpperCase();
            }else strArray[i] = alphabetArray[alphabetArray.indexOf(strArray[i].toLowerCase()) + num].toUpperCase();
        } else if (strArray[i] == strArray[i].toLowerCase() && alphabetArray.indexOf(strArray[i].toLowerCase()) != -1) {
            if( alphabetArray[alphabetArray.indexOf(strArray[i].toLowerCase()) + num]==undefined ){
                strArray[i] = alphabetArray[(alphabetArray.indexOf(strArray[i].toLowerCase())) + num-26].toLowerCase();
            }else strArray[i] = alphabetArray[alphabetArray.indexOf(strArray[i]) + num].toLowerCase();
        }else strArray[i]=strArray[i];
    }
   console.log(strArray.join(""));
   return strArray.join("");
}
CeasarCipher("coderBYTE",2);

//function CaesarCipher(str,num) {
//    return str.replace(/[a-z]/ig,function(c){
//        var letNum = c.charCodeAt() + num;
//        if(c == c.toLowerCase() && letNum > 122){
//            var one = letNum - 122 + 96;
//            console.log(String.fromCharCode(one));
//            return String.fromCharCode(one);
//        }
//        if(c == c.toUpperCase() && letNum > 90){
//            var two = letNum - 90 + 64;
//            console.log(String.fromCharCode(two));
//            return String.fromCharCode(two);
//        }
//        console.log(String.fromCharCode(letNum));
//        return String.fromCharCode(letNum);
//    });
//}
//CaesarCipher("coderBYTE",2);