function solution(list) {
  let ans = '';
  for (var i = 0; i < list.length; i++) {
    let increment = 0;
    i === 0 ? ans += list[i + increment] + '-' : ans += ',' + list[i + increment] + '-';
    while (list[i + increment] === list[i] + increment) {
      increment++;
    }
    list[i] !== list[i + increment - 1] ? ans += list[i + increment - 1] : ans = ans.split('').slice(0, ans.length - 1).join('');
    i = i + increment - 1;
  }
  return ans;
}

console.log(solution([1, 2, 3, 5, 9])); //'1-3,5,9'
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])); //'-6,-3-1,3-5,7-11,14-15,17-20'
console.log(solution([1, 3, 4, 5, 7, 9, 10])); //'1,3-5,7,9-10'
