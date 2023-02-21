// JavaScript reduce functions: (reduce syntax:)
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

/* ------------------------------------------------------------ */

// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// reduce() method does not change the original array.
// reduce() method executes the callback function once for each assigned value present in the array, taking four arguments:

// 1. accumulator - two parameter
// 2. currentValue
// 3. currentIndex
// 4. array



// Example 1: reduce() method:
const numbers = [ 12, 56, 46, 87, 44, 35, 22, 60, 99, 18 ];
// const sum = numbers.reduce((total, currentValue) => total + currentValue , 0);
const sum = numbers.reduce((total, currentValue) => {
   console.log('total: ', total, 'currentValue: ', currentValue);
   return total + currentValue;
}, 0);
console.log(sum);