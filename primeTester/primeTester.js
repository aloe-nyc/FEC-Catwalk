/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = (n) =>{
  if (n == 0 || n === 1) {
    return false;
  }
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
};

console.log(primeTester(25)) //false
console.log(primeTester(8)) //false
console.log(primeTester(81)) //false
console.log(primeTester(720))//false
console.log(primeTester(0)) //false
console.log(primeTester(1)) //false
console.log(primeTester(109))//true
console.log(primeTester(11)) //true
console.log(primeTester(17)) //true
console.log(primeTester(227))//true