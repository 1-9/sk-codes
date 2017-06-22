/**
 * Created by suryatej.kotamraju on 13/03/2015.
 */
function PrimeTime(num) {
    var divisorCount=0;

    //Loops through numbers starting from 1 and increments divisorCount
    for (var i = 1; i <= num; i++) {
        if(num%i==0){
            divisorCount++;
        }
    }
    var ans=false;
    //If less than 2 divisors number is prime else not a prime
    if(divisorCount <=2){
        ans=true;
    }else if(divisorCount>2){
        ans=false;
    }
    return ans;
}

PrimeTime();