/**
 * Created by suryatej.kotamraju on 13/03/2015.
 */
function PrimeMover(num) {
    var primeNumberArray=[];
        var startNumber=1;
        while(primeNumberArray.length<=num){
            if(ReturnPrime(startNumber)!=undefined){
            primeNumberArray.push(ReturnPrime(startNumber));
            }
            startNumber++;
        }

    console.log(primeNumberArray[num]);
    // code goes here
    return primeNumberArray[num];
}

//function to return a prime number
function ReturnPrime(num){
    var divisorCount=0;
    //Loops through numbers starting from 1 and increments divisorCount
    for (var i = 1; i <= num; i++) {
        if(num%i==0){
            divisorCount++;
        }
    }
    //If less than 2 divisors number is prime else not a prime
    if(divisorCount <=2){
    return num;
    }
}

PrimeMover(100);