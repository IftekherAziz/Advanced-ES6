// Javascript filtering array elements:
// filter() syntax: filter(function(item, index, array) { ... }, thisArg)\

/* ----------------------------------------------------------------------- */

// filter() method creates a new array with all elements that pass the test implemented by the provided function.
// filter() method does not change the original array.
// filter() method returns a new array.

/* ----------------------------------------------------------------------------------------- */

// Example 1: filter() method:
const numbers = [12, 56, 46, 87, 44,35, 22, 60, 99, 18];
const bigNumbers = numbers.filter((n) => n > 20);
console.log(bigNumbers);

// Example 2: filter() method:
const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 300, color: "white" },
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);