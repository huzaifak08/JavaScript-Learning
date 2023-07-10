// Destruction and Spread Operator:

// Normal Method of storing an array elements in variables:
let arr = [3, 5, 6];
let [a, b, c] = arr;

console.log(a, b, c);
// -----------------------------------------------------------

// Destruction Way:
let arr2 = [3, 5, 4, 2, 4, 3, 3, 5, 4];
let [a, b, c, ...rest] = arr2;

console.log(a, b, c, ...rest);
// -----------------------------------------------------------

// Can also skip value in destruction:
let [a, , , ...rest] = arr2; // skip b and c (index 1 and 2)
console.log(a, rest);
// -----------------------------------------------------------

// Another Simple way:
let { a, b } = { a: 1, b: 5 };
console.log(a, b);