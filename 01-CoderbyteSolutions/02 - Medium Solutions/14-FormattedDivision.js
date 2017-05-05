/**
 * Created by suryatej.kotamraju on 3/17/15.
 */
function FormattedDivision(num1,num2){
 var dividend = (num1/num2).toFixed(4);
    var splitDividend =(dividend).split(".");
    splitDividend[0] = splitDividend[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return( splitDividend.join("."));
    console.log( splitDividend.join("."));
}
FormattedDivision(503394930,43);