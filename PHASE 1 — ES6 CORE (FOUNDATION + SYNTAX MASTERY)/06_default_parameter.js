// Default Parameters (ES6)

// Basic syntax

function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet());      // "Hello Guest"
console.log(greet("A"));   // "Hello A"

// When default is applied

// Default value is used only when argument is undefined.

console.log(greet(undefined))  // "Hello Guest"
console.log(greet(null));      // "Hello null"  ❌ default NOT used

// Important rule

// Default parameters work only for undefined, not for null, 0, "", or false.

`Function Safety (Defensive Coding)

Function safety means:

Function should not break, even if input is wrong, missing, or unexpected.`

// 1. Safe defaults (most common)

function add(a = 0, b = 0) {
  return a + b;
}

add();        // 0
add(5);       // 5
add(5, 3);    // 8

// Without defaults → NaN risk.

