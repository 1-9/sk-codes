// Bubble sort is a simple sorting algorithm that
// repeatedly steps through the list to be sorted, compares each pair of
// adjacent items and swaps them if they are in the wrong order.
// This process is repeated until no
// swaps are needed, which indicates that the list is sorted.

function bubbleSort(arr){
  var sortFlag;
  do{
    sortFlag=false;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i]>arr[i+1]) {
        var temp=  arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        sortFlag=true;
      }
    }
  }while(sortFlag);
  return arr;
}
bubbleSort([4,5,1,6,3]);
