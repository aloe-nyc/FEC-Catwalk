/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

//helper function to get pivot

let findPivot = (array) => {
  let midpoint = Math.floor( (array.length - 1) / 2)
  return midpoint;
}

let sort = (arr) => {

}

let quicksort = (array) => {
  //find pivot

  let pivot = findPivot(array)
  let midpoint = array.splice(pivot, 1)

  let lower = [];
  let higher = [];

  for (let i = 0; i < array.length; i++) {
    midpoint > array[i] ? lower.push(array[i]) : higher.push(array[i]);
  } //partitions array dependant on if they are smaller or larger than pivot
  console.log(lower, higher)
   let sortedLows = sort(lower)
   let sortedHighs = sort(higher)
};


console.log(quicksort([3, 7, 2, 5, 8, 6, 1]));// [1,2,3,5,6,7,8]
//midpoint is 5
//seperate arrays are [3, 2, 1] && [7, 8, 6]
