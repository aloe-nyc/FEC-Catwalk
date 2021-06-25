/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/
var compareLetters = (str) => {
  console.log(str[0] === str[str.length - 1]);
  return str[0] === str[str.length - 1] ? str : false

}
var longestPalindrome = function (string, mover = 1) {
  //something to add/subtract
  //something to  hold longest string
  let longestStr = ''
  //for loop
  for ( let i = 1; i < string.length; i++ ) {
    let char = string[0]
    let wordHolder = [];
    //this i have to do over and over again until  compareLetters returns false
    console.log(i - mover, i,  i + mover)
    let tempstr = string.substring(i - mover, i + (mover + 1));
    console.log(tempstr)
    if (compareLetters(tempstr) === false) {
      mover = 1;
    }
    if (compareLetters(tempstr) === true) {
      mover++;
      if (tempstr.length > longestStr.length) {
        longestStr = tempstr;
      }
    }    //helper function
  }
  //array in for loop
  //return string
  return longestStr
};
console.log(longestPalindrome("banana")) //ana
//console.log(longestPalindrome("My dad is a racecar athlete")) // a racecar a
/*example for thought : banana
str[0] === b
str[0 -1 ] = und, str[0] === b, str[1] === a
no dice
for loop continues
str[1] === a
str[1 -1 ] = b, str[1] === a, str[1 + 1] === n
no  dice
continue
str[2] === n
str[2 -1 ] = a, str[2] === n, str[2 + 1] === a
save in array
continue
str [2-2] === b str[2 -1 ] = a, str[2] === n, str[2 + 1] === a str[2+2] === n
no dice

cotninue itertion
*/