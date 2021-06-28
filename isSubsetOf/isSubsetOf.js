/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 *
 *
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  var storage = {};
  var iterable = this;

  for ( const item of this ) {
    if (!storage[item]) {
      storage[item] = 0;
    }
  }

  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    if (el in storage) {
      delete storage[el];
    }
  }

  return Object.values(storage).length > 0 ? false : true;
};

// var b = ['merge','reset','reset']
// console.log( b.isSubsetOf(['reset','merge','add','commit']) )// true

// var a = ['commit','push']
// console.log( a.isSubsetOf(['commit','rebase','push','blame']) )// true

// a = ['commit','push', 'angie']
// console.log( a.isSubsetOf(['commit','rebase','push','blame']) )//false



//next attempt will be implementing nested arrays / obj
// a = ['commit','push', 'angie']
// a.isSubsetOf(['commit',['rebase', 'angie'],'push','blame']) //true