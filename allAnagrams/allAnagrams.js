/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = (string) => {
  let anagramArr = [];
  let charArr = string.split('');
  console.log(string);
  // Your code here.
  for (let char of string) {
    var combo = char;
    console.log(char)
    for (var i = 0; i < charArr.length; i++) {
      let letter = charArr[i];
      console.log('for of: ', char, 'for loop: ', string);
      if (!combo.includes(letter) && combo.length < 3) {
        combo += letter;
      }
    }
    if (combo.length === 3) {
      anagramArr.push(combo);
    }
  }
  //for loop for initial string
  //for each letter in string
  //use another loop
  //if letter is already in string, do not populate
  //otherwise, add letter to string.. pushing final combination into array
  //[ 'abc', 'bac', 'cab' ] <-- result. how do I get 'acb','bca', 'cba'
  //why do i suck with these kinds of algos
  return anagramArr;
};

var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]