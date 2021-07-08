/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * ->
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = ([...str]) =>{
  let results = [''];

  for (char of str) {
    let num = results.length - 1
    for (let i = 0; i <= num; i++) {
      console.log(char)
      results.push( [...results[i], char])
      console.log('in 2nd for loop', char, i)
    }
  }
  return results;
};

console.log(powerSet("abc")) //[ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
console.log(powerSet("jump")) // ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]