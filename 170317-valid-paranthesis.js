/////////////////////////////////////////////////////////////////////////////////////////////////
// Write a function called validParentheses that takes a string of parentheses, and determines //
// if the order of the parentheses is valid. validParentheses                                  //
// should return true if the string is valid, and false if it's invalid.                       //
//                                                                                             //
// Examples:                                                                                   //
// validParentheses( "()" ) => returns true                                                    //
// validParentheses( ")(()))" ) => returns false                                               //
// validParentheses( "(" ) => returns false                                                    //
// validParentheses( "(())((()())())" ) => returns true                                        //
//                                                                                             //
// All input strings will be nonempty, and will only consist of open                           //
// parentheses '(' and/or closed parentheses ')'                                               //
/////////////////////////////////////////////////////////////////////////////////////////////////

function validParentheses(parens) {
  let parensStack = [parens[0]];
  for (var i = 1; i < parens.length; i++) {
    if (parensStack[parensStack.length - 1] === '(' && parens[i] === ')') {
      parensStack.pop();
    } else {
      parensStack.push(parens[i]);
    }
  }
  return !parensStack.length;
}

console.log(36, '170317-valid-paranthesis.js', validParentheses('()')); // true
console.log(36, '170317-valid-paranthesis.js', validParentheses('())(')); // false
console.log(36, '170317-valid-paranthesis.js', validParentheses('(())())))')); // false
