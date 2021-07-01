/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = (number) => {
  if (number / 1 === number) {
    return `${number}/1`;
  }

  //no whole numbers
  //should number be converted to string? - upon return yes
  //need gfc => (a, b) => (a, a mod b) <= until b is 0 then found gfc
  //need to split whole num from decimal nums
  //do i multiply those both by 100 then run gfc? perhaps...
};
console.log(toFraction(0.5) === '1/2')
console.log(toFraction(3.0) === '3/1')
console.log(toFraction(2.5) === '5/2')
console.log(toFraction(0.875) === '7/8')
console.log(toFraction(0.66666666666) === '2/3')
console.log(toFraction(1.6) === '16/10')