/**
 * Created by suryatej.kotamraju on 25/03/2015.
 */
function FirstFactorial(num) {
    var fact=1;
    if(num===1||0){
        return 1;
    }
    else{
        for(i=1;i<=num;i++){
            fact = fact*i;
        }
    }
    console.log(fact);
    return fact;
}
FirstFactorial(4);