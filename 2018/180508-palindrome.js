function palindrome(str) {
  if (str.length / 2 <= 0) {
    return true;
  } else {
    return (
      str[0] === str[str.length - 1] && palindrome(str.slice(1, str.length - 1))
    );
  }
}

console.log(palindrome('racecar'));
console.log(palindrome('madam'));
console.log(palindrome('aaja'));
