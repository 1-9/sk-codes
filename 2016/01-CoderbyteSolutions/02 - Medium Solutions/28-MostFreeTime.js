/**
 * Created by suryatej.kotamraju on 23/03/2015.
 */
/**
 * 1)Reformat time from hh:mm to just minutes depending on am or pm
 * 2)Sort the array of times starting from earliest to latest
 * 3)Find the maximum difference between two times
 * 4)Reformat minutes to hh:mm format and return answer
 * **/
function MostFreeTime(strArr){
    for (var i = 0; i < strArr.length; i++) {
        if(strArr[i].match(/[0-9][0-9]?:[0-9][0-9]?\a/gi)!=null){
            strArr[i]=strArr[i].replace(/[0-9][0-9]?:[0-9][0-9]?\am/gi, function (str) {
                var temp=str.split(":");
                temp[1]=temp[1].replace(/a/gi,"");
                if(temp[0]==12){
                    temp[0]=0;
                }
                temp[0]= parseInt(temp[0]*60)+parseInt(temp[1]);
                temp.pop();
                return temp;
                //console.log(temp);
            });
        }
        if(strArr[i].match(/[0-9][0-9]?:[0-9][0-9]?\p/gi)!=null){
            strArr[i]=strArr[i].replace(/[0-9][0-9]?:[0-9][0-9]?\pm/gi, function (str) {
                var temp=str.split(":");
                temp[1]=temp[1].replace(/p/gi,"");
                if(temp[0]<12){
                    temp[0]=parseInt(temp[0])+12;
                }
                temp[0]= parseInt(temp[0]*60)+parseInt(temp[1]);
                temp.pop();
                return temp;
                //console.log(temp);
            });
        }
    }
    var ans =0;
    function sortTime(arr){
        return arr.sort(function (a, b) {
            a= a.split("-");
            b= b.split("-");
            return a[0]-b[0];
        })
    }
    function freeTime(arr){
        return arr.sort(function (a, b) {
            a= a.split("-");
            b= b.split("-");
            if(b[0]-a[1]>ans){
                ans=b[0]-a[1];
            }
        })
    }
    sortTime(strArr);
    freeTime(strArr);
    function ansFormat(num){
        if(num<10){
            return "00"+":"+0+num;
        }else if(num<60){
            return "00"+":"+num;
        }else if(num>59){
            var min=Math.floor(num/60);
            var sec=num%60;
            if(min<9){
                min="0"+min;
            }
            if(sec<9){
                sec="0"+sec;
            }
            return min+":"+sec;
        }
    }
    ans=ansFormat(ans);
    console.log(ans);
    return ans
}
MostFreeTime( ["01:52AM-01:55AM","01:00AM-01:10AM","01:20AM-01:50AM"]);