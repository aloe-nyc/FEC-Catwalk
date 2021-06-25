/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */
//first atrocious implementation

var firstNonRepeatedCharacter = function(string) {
  //turn string into an array
  var stringCopy = string.split('');
  var stringCopyCopy = string.split('');
  //make a copy
  for ( var i = 0; i < stringCopy.length; i++ ) {
    var char = stringCopy[i]
    var removed = stringCopyCopy.splice(i, 1);
    if (! stringCopyCopy.includes(char) ) {
      return string[i]
    }
    stringCopyCopy = string.split('');
  }

};



console.log(firstNonRepeatedCharacter('AACBDB') ); //C
console.log(firstNonRepeatedCharacter('ABA')) //'B'
console.log(firstNonRepeatedCharacter('')) //''


//previously used an object to do this problem
//would like to try figuring out a different solution
//maybe iteration
//sliceing 1 letter from index
//if char is included in modified string
//keep going
//if not return character from original string
//i like this idea -- not working though

//I got it to work but it does NOT handle lower case - gonna have to continue with it when I have time