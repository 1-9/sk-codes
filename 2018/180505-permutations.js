function permutations(str, currentStr = '') {
  if (str === '') {
    console.log(currentStr);
  } else {
    for (let i = 0; i < str.length; i++) {
      currentStr += str[i];
      str = str.slice(0, i) + str.slice(i + 1);
      permutations(str, currentStr);
      str = str.slice(0, i) + currentStr[currentStr.length - 1] + str.slice(i);
      currentStr = currentStr.slice(0, currentStr.length - 1);
    }
  }
}

permutations('abcd');
