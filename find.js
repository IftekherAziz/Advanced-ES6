// Javascript find function:
// find() syntax: find(function(item, index, array) { ... }, thisArg)

/* ----------------------------------------------------------------------- */

// find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// find() method does not change the original array.
// find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

/* ----------------------------------------------------------------------------------------- */

// Example 1: find() method:
const numbers = [12, 56, 46, 87, 44,35, 22, 60, 99, 18];
const isThere = numbers.find(n => n > 80);
console.log(isThere);