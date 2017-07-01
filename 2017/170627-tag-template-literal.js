// template literals  tagged function

function replaceDollar(literals, ...substitutions) {
  console.log(literals, substitutions);
  var ans = '';
  for (var i = 0; i < substitutions.length; i++) {
    ans += literals[i];
    ans += substitutions[i] * substitutions[i];
  }
  ans += literals[literals.length - 1];
  console.log(ans);
}

let initialText = String.raw `${8} conversion
is ${9}\n`;
let someText = replaceDollar `${initialText}`;

// default parameters

function defParam(age, name, city = 'nyc', country = 'usa') {
  console.log(age, name, city, country);
}

defParam(4, 's');

function mixArgs(first, second) {    
  console.log(first === arguments[0]);    
  console.log(second === arguments[1]);    
  first = "c";    
  second = "d";    
  console.log(first === arguments[0]);    
  console.log(second === arguments[1]);
  console.log(arguments, first, second);
}

mixArgs("a", "b");
