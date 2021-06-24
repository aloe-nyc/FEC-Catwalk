/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  //create return arrau
  var result = [];
  var holder = {};
  //could create an object to hold pairs
  for ( var i = 0; i < string.length; i++ ) {
    var char = string[i];
    if (!holder[char]) {
      holder[char] = 1
    } else {
      holder[char]++;
    }
  }
  //Object.entries hold key value pairs in array
  //can use sort for those values
  //console.log(Object.entries(holder))
  var charArrs = Object.entries(holder)
  //iterate through string
  //once finished with iteration put pairs in array for return
  charArrs =  charArrs.sort((a, b)=>  b[1] - a[1])
  return charArrs.sort( (a, b) => b[0] - a[0] && b[1] - a[1] )
};

  //console.log( characterFrequency('mississippi') );
  // [
  //   ['i', 4],
  //   ['s', 4],
  //   ['p', 2],
  //   ['m', 1]
  // ]

//       :: Example2 ::

// console.log( characterFrequency('miaaiaaippi') )
//   // [
//   //   ['a', 4],
//   //   ['i', 4],
//   //   ['p', 2],
//   //   ['m', 1]
//   // ]

// //       :: Example3 ::

console.log( characterFrequency('mmmaaaiiibbb') )
  // [
  //   ['a', 3],
  //   ['b', 3],
  //   ['i', 3],
  //   ['m', 3]
  // ]