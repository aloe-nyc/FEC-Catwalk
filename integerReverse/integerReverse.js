/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  let reverse;
  //gets last number
  let lastNum = number % 10
  let rest = number / 10
  reverse = (reverse * 10) + lastNum;
  console.log(lastNum, rest);

  return reverse;
}


console.log(reverseInteger(81)) //18
console.log(reverseInteger(144)) //441
console.log(reverseInteger(2134)) //4312
console.log(reverseInteger(2)) //2
console.log(reverseInteger(9117)) //7119