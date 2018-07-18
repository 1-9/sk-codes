var numMatchingSubseq = function(str, words) {
  let ans = 0,
    strMap = generateMap(str);

  for (let word of words) {
    let lastIndex = -1;
    for (let i = 0; i < word.length; i++) {
      let current = strMap[word[i]];
      if (current) {
        while (lastIndex > current[current.pos]) {
          current.pos++;
        }
        lastIndex = current[current.pos];
        strMap[word[i]].pos++;
        if (lastIndex === undefined) {
          break;
        }
        if (i === word.length - 1) {
          ans++;
        }
      } else {
        break;
      }
    }
    resetPos(strMap);
  }
  return ans;
};

function resetPos(obj) {
  for (var key in obj) {
    obj[key].pos = 0;
  }
}

function generateMap(str) {
  let strMap = {};
  for (let i = 0; i < str.length; i++) {
    if (!strMap[str[i]]) {
      strMap[str[i]] = [];
      strMap[str[i]].pos = 0;
    }
    strMap[str[i]].push(i);
  }
  return strMap;
}

numMatchingSubseq('abcdeb', ['a', 'bbc', 'acd', 'ace']); // 3
numMatchingSubseq('abcdeb', ['acd']); // 1
numMatchingSubseq(
  'rwpddkvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvjubjgloeofnpjqlkdsqvruvabjrikfwronbrdyyjnakstqjac',
  [
    'wpddkvbnn',
    'lnagtva',
    'kvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvju',
    'rwpddkvbnnugln',
    'gloeofnpjqlkdsqvruvabjrikfwronbrdyyj',
    'vbgeinupkvgmgxeaaiuiyojmoqkahwvbpwugdainxciedbdkos',
    'mspuhbykmmumtveoighlcgpcapzczomshiblnvhjzqjlfkpina',
    'rgmliajkiknongrofpugfgajedxicdhxinzjakwnifvxwlokip',
    'fhepktaipapyrbylskxddypwmuuxyoivcewzrdwwlrlhqwzikq',
    'qatithxifaaiwyszlkgoljzkkweqkjjzvymedvclfxwcezqebx'
  ]
); // 5
