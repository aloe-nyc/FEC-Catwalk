/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {

};

firstNonRepeatedCharacter('AACBDB');

//console.log(firstNonRepeatedCharacter('ABA')) //'B'
//console.log(firstNonRepeatedCharacter('')) //''
// console.log(firstNonRepeatedCharacter('1244634r')) //'r' (should ignore numbers?)
// console.log(firstNonRepeatedCharacter('aBbAaZ'))//'Z'
// console.log(firstNonRepeatedCharacter('aaaAAaa')) // ''

//previously used an object to do this problem
//would like to try figuring out a different solution
//maybe iteration
//sliceing 1 letter from index
//if char is included in modified string
//keep going
//if not return character from original string
//i like this idea -- not working though