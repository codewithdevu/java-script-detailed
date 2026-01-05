// 1. Array Destructuring

// Concept
// Array destructuring allows you to extract values from an array into variables by position.

// Basic Example
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); 
console.log(b); 
console.log(c); 

// Skip Values
const arr2 = [15, 25, 35 ,45 ,55];

const [arr1 , , , ,arr5] = arr2

console.log(arr1);
console.log(arr5);

// Rest Operator with Array
const arr3 = [1, 2, 3, 4, 5];

const [x, y, ...rest] = arr3

console.log(x);
console.log(y);
console.log(rest);





