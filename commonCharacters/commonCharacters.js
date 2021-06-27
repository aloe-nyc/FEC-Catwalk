/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
var objCreator = (str) => {
  var obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    }
  }
  return obj
}


var commonCharacters = function(string1, string2) {
  let args = [...arguments ]
  let objArr =  [];

  for ( let i = 0; i < args.length; i++ ) {
    args[i] === '' ? args.splice(i, 1) : args;
    objArr.push( objCreator(args[i]));
  }

  let results = {};
  for (let i = 0; i < objArr.length; i++) {
    for (let item in objArr[i]) {
      if (!results[item]) {
        results[item] = 0;
      }
      results[item]++;
    }
  }

  let str = ''
  for (var letter in results) {
    if (results[letter] === objArr.length) {
      str += letter;
    }
  }
  //return string
  return str;
};


console.log( commonCharacters('acexivou', 'aegihobu') ) //* Returns: 'aeiou'

console.log( commonCharacters('acexivou', 'aegihobu', 'aerres') ) // Returns : 'ae'

console.log( commonCharacters('', 'ace', 'jack') ); // Returns : 'ac'