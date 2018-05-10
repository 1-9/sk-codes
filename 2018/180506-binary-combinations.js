function binaryGenerator(num, binary = '', ans = []) {
  if (num === 0) {
    ans.push(binary);
  } else {
    binaryGenerator(num - 1, binary.concat('0'), ans);
    binaryGenerator(num - 1, binary.concat('1'), ans);
  }
  return ans;
}

console.log(binaryGenerator(2)); // [ '00', '01', '10', '11' ]
console.log(binaryGenerator(3)); //  [ '000', '001', '010', '011', '100', '101', '110', '111' ]
console.log(binaryGenerator(4)); // [ '0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111' ]
