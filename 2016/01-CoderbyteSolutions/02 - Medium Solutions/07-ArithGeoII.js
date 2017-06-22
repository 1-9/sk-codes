/**
 * Created by suryatej.kotamraju on 3/15/15.
 */
function ArithGeoII(arr){
    var difference=arr[2]-arr[1];
    var multiple=arr[2]/arr[1];
    var geoArray=[];
    var artArray=[];
    var startValue=arr[0];
    geoArray.push(startValue);
    artArray.push(startValue);
    //populate geoArray and artArray with probable values based on multiple and difference
    while(arr.length>geoArray.length && arr.length>artArray.length){
        geoArray.push(geoArray[geoArray.length-1]*multiple);
        artArray.push(artArray[artArray.length-1]+difference);
    }
    if(arr.join("")==geoArray.join("")){
        console.log("Geometric");
        return "Geometric";
    }else if(arr.join("")==artArray.join("")){
        console.log("Arithmetic");
        return "Arithmetic";
    }else {console.log("-1");
    return "-1";}
    }
ArithGeoII([2,6,18,54]);