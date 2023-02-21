// forEach() syntax: forEach(function(item, index, array) { ... }, thisArg)

// forEach() method executes a provided function once for each array element.
// forEach() method does not change the original array.
// forEach() method does not return anything.

/* ------------------------------------------------------------------------ */

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 300, color: "white" },
];

const x = products.forEach((product) => console.log(product));
console.log(x); // undefined

