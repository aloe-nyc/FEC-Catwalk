/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/
let longest = (arr, word = '') => {
  for (var i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i]
    }
  }
  return word;
}

let compareLetters = (lesser, higher, str) => { //arrow func
  while (lesser >= 0 && higher < str.length && str[lesser] === str[higher]) {
    lesser--;
    higher++;
  }
  return str.slice(lesser+1, higher)
}

let longestPalindrome = function (string) { //arrow func, default param
  let longestStr = '';
  let odd = [], even = [];

  for (let i = 0; i < string.length; i++) {
    odd.push( compareLetters(i-1, i+1, string) )
    even.push( compareLetters(i, i+1, string) )
  }

  return longest( even, longest(odd) );
};

console.log(longestPalindrome("banana")) // "anana"
console.log(longestPalindrome("My dad is a racecar athlete")) // "a racecar a"
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