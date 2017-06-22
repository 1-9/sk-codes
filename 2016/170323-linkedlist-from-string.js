////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function parse which accepts an argument string/$string which is a string                         //
// representation of a linked list.                                                                           //
//                                                                                                            //
// Your function must return the corresponding linked list, constructed from instances of the Node class.     //
// The string representation of a list has the following format: the value of the node,                       //
// followed by a whitespace, an arrow and another whitespace (" -> "),                                        //
// followed by the rest of the linked list.                                                                   //
// Each string representation of a linked list will end in "null"/"NULL" depending on the language            //
// you are undertaking this Kata in. For example, given the following string representation of a linked list: //
//                                                                                                            //
// "1 -> 2 -> 3 -> null"                                                                                      //
// your function should return:                                                                               //
//                                                                                                            //
// new Node(1, new Node(2, new Node(3)))                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// function parse(string) {                             //
//   // Write your code here                            //
//   var stringArray = string.split('->');              //
//   var linkedList = new Node(stringArray[0]);         //
//   for (var i = 1; i < stringArray.length - 1; i++) { //
//     addToTail(linkedList, stringArray[i]);           //
//   }                                                  //
//   return linkedList;                                 //
// }                                                    //
//                                                      //
// function addToTail(list, val) {                      //
//   while (list.next) {                                //
//     list = list.next;                                //
//   }                                                  //
//   list.next = new Node(val);                         //
//   return list;                                       //
// }                                                    //
//////////////////////////////////////////////////////////

function Node(val, next) {
  this.val = val;
  this.next = next;
}

function parse(string) {
  return string === 'null' ? null : new Node(parseInt(string), parse(string.slice(string.indexOf('->') + 2)));
}

console.dir(parse('1->2->3->null'), { depth: null });
console.dir(parse('9->8->7->null'), { depth: null });
