function parseMolecule(formula) {

  let
    temp,
    matchingBracket = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

  var sub = function (formula) {
    for (var i = formula.length - 1; i >= 0; i--) {
      if (matchingBracket[formula[i]]) {
        temp = parseInt(formula[i + 1]) > 0 ? parseInt(formula[i + 1]) : temp;
        let matchingIndex = formula.lastIndexOf(matchingBracket[formula[i]], i);
        return sub(formula.slice(0, matchingIndex) + repeatCalucator(formula.slice(matchingIndex + 1, i), temp) + formula.slice(i + 2));
      }
    }
    console.log(formula);
    return formula;
  };

  return sub(formula);
}

function repeatCalucator(input, count) {
  let ans = '';
  if (count) {
    while (count > 0) {
      ans += input;
      count--;
    }
    return ans;
  } else {
    return input;
  }
}


var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
