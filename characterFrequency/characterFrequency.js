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


let characterFrequency = (string) => {
  let result = [];
  let holder = {};
  let counter = 0;

  for ( let i = 0; i < string.length; i++ ) {
    let char = string[i];
    if (!holder[char]) {
      holder[char] = 1
    } else {
      holder[char]++;
    }
  }

  let charArrs = Object.entries(holder)
  charArrs =  charArrs.sort((a, b) => {
    if( a[1] > b[1] ) {
      return -1
    } else if (a[1] < b[1]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    }
  })

  return charArrs;

};


  console.log( 'result: ', characterFrequency('mississippi') );
  // [
  //   ['i', 4],
  //   ['s', 4],
  //   ['p', 2],
  //   ['m', 1]
  // ]

//       :: Example2 ::

console.log( 'result: ',characterFrequency('miaaiaaippi') )
//   // [
//   //   ['a', 4],
//   //   ['i', 4],
//   //   ['p', 2],
//   //   ['m', 1]
//   // ]

// //       :: Example3 ::

console.log( 'result: ',characterFrequency('mmmaaaiiibbb') )
  // [
  //   ['a', 3],
  //   ['b', 3],
  //   ['i', 3],
  //   ['m', 3]
  // ]


  // if (charArrs[num][0].localeCompare(char[0]) < 0) {
  //   var hold = char;
  //   char = charArrs[num];
  //   console.log('during if', charArrs)
  //   charArrs[num] = hold;
  // }