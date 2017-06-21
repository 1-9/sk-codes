// Complete the solution so that it strips all text that follows any of a set of
// comment markers passed in. Any whitespace at the end of the
// line should also be stripped out.

function solution(input, markers) {
  for (var i = 0; i < markers.length; i++) {
    let start = input.indexOf(markers[i]);
    while (start > 0) {
      let end = input.indexOf('\n', start);
      input = end > start ? input.slice(0, start - 1) + input.slice(end) : input.slice(0, start - 1);
      start = input.indexOf(markers[i]);
    }
  }
  return input;
}

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
console.log(31, '161227-Strip-Comments.js', result);
// result should == "apples, pears\ngrapes\nbananas"
