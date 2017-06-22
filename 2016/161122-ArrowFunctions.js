// variations of writing an arrow function


// need empty paranthesis when no parameters

() => 5;

// single parameter don't need paranthesis, parameter name can also be _ be careful 😱

x => 5;
_ => 5;

// destructuring assignment, spread operator, object literals and default parameter assignment
// should always be wrapped inside paranthesis

(...x) => 5;
({
  x
}) => 5;

// when returning an object you need to wrap paranthesis around body

() => ({
  ans: 5
});

// if you want to do additional logic inside a function you need to wrap the body in curly brackets and have a return statement

() => {
  // some logic
  return 5;
}

// arrow functions 99.99% of the time are used inside another function as a parameter 😐
// you cannot name an arrow function when used inside another function 😡

foo = () => 2;

console.log(foo());