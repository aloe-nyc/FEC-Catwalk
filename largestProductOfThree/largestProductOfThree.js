/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


let largestProductOfThree = (array) => {
  let product = 0;
  let index = 0
  while (index < array.length - 2) {
    for ( let i = 1; i < array.length; i++ ) {
      if (typeof array[i]!== 'number') return null;
      if (array[i+1] === undefined) continue;

      let total = (array[index]) * (array[i]) * (array[i+1]);

      if ( Math.abs(total) > Math.abs(product) ) {
        product = total
      }
    }
    index++;
  }
  return product;
};

console.log(largestProductOfThree([2, 1, 3, 7]) === 42)
console.log(largestProductOfThree([2, 1, 2, 2, 2, 3, 7]) === 42)
console.log(largestProductOfThree([2, 1, 3, -7]) === -42);
console.log(largestProductOfThree([2, 1, 'a', 7]))

// while (secondDig < array.length - 2) {
//   console.log(num, array[firstDig], array[secondDig])
//   tempProd = num * array[firstDig] * array[secondDig];
//   if (Math.abs(tempProd) > product){
//   product = tempProd;
//   }
//   firstDig++;
//   secondDig++;
//   tempProd = 0;
// }