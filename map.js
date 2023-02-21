/* const numbers = [4, 2, 3, 6, 5 , 9, 8, 7, 1];
const output = [];
for (const number of numbers) {
    const result = number * 2;
    output.push(result);
}
console.log(output); */

// function:

/* function doubleIt(numbers){
    const output = [];
    for (const number of numbers) {
      const result = number * 2;
      output.push(result);
    }
    return output;
}
const results  = doubleIt(numbers);
console.log(results); */


/* 
1. map() creates a new array from calling a function for every array element.
2. map() does not execute the function for array elements without values.
3. map() does not change the original array.
4. map() is not executed for empty arrays.
5. map() is a higher order function.
6. map() is a non-mutating function.
7. map() is a pure function.
8. map() is a callback function.
*/

/* ----------------------------------------------------------- */
// map() function syntax: 
// arr.map(function(element, index, array){  }, this);

/* ------------------------------------------------------------ */

// map() function example1:
const nums = [4, 7, 10, 6, 25, 9, 8, 7, 3];
const res = nums.map((n) => n * 2);
console.log(res);

// map() function example2:
const numbers = [5, 6, 10, 8, 20, 9, 5, 1, 3];
const doubleIt = (n) => n * 2;
const res2 = numbers.map(doubleIt);
console.log(res2);

// map() function example3:

const numbersAll = [1,2,3,4,5,6,7,8,9,10].map((n) => n * 5);
console.log(numbersAll);
