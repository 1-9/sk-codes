// Fisher–Yates shuffle, is an algorithm for generating a random permutation of a
// finite set—in plain terms,for randomly shuffling the set.
// The shuffle is unbiased, so that every permutation is equally likely.

function fisherYates(arr){
  var ans = [];
  while (arr.length>0){
    var randomIndex = Math.floor((Math.random()*arr.length));
    ans.push(arr[randomIndex]);
    arr.splice(randomIndex,1);
  }
  return ans;
}
fisherYates([2,4,3,9]);
