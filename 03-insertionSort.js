// Insertion sort is an inplace sorting algorithm that builds
// the final sorted array (or list) one item at a time.

function insertionSort(arr){
  for(var i = 1; i < arr.length; i++) {
    var element = arr[i];
    var j = i;
    while(j>0 && arr[j-1]>element){
      arr[j]=arr[j-1];
      j=j-1;
    }
    arr[j]=element;
  }
  return arr;
}
insertionSort([3,84,1,9,2,5]);
