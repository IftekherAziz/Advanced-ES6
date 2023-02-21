// declearing a variable
const numbers = [12, 56, 46, 87, 44];

// convert the numbers to half of their values using map() function
const half = numbers.map((n) => n / 2);

// print the half values
console.log(half);

// convert the numbers to third of their values using map() function
const third = numbers.map((n) => n / 3);

// print the third values
console.log(third);

/* ---------------------------------------------------------------- */

// Create a new array of friends first letters using map() function
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLatters = friends.map((friend) => friend[0]);
console.log(firstLatters);

// Get the length of the friends names using map() function
const namesLength = friends.map((friend) => friend.length);
console.log(namesLength);

/* ---------------------------------------------------------------- */

// Array of objects map() function example
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 300, color: 'white' },
];

// Get the names of the products using map() function
const names = products.map((product) => product.name);
console.log(names);

// Get the price of the product using map() function
const prices = products.map((product) => product.price);
console.log(prices);

/* ---------------------------------------------------------------- */
