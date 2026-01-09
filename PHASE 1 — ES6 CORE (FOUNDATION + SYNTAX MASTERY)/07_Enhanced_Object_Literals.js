// Enhanced Object Literals reduce boilerplate and make objects more readable, safer, and expressive.

// 1. Property Shorthand
// ❌ Old way (ES5)

// const name = "A";
// const age = 20;

// const user = {
//   name: name,
//   age: age
// };

// ✅ ES6 Property Shorthand

const name = "A";
const age = 20;

const user = { name, age };

console.log(user.name , user.age);


// Rule

// If key name == variable name, you can omit the value.

// Example

const PI = Math.PI;

const use1 = {
    // PI: PI
    PI
}

console.log(PI);

// Interview line

// Property shorthand reduces redundancy and improves clarity.

`2. Computed Properties
Problem

Property names are dynamic (not fixed).

❌ Not possible like this`

// const key = "email";
// const user3 = {
//   key: "test@gmail.com" // wrong
// };

// ✅ Computed Property (ES6)

const key = "email";

const user4 = {
  [key]: "test@gmail.com"
};

console.log(user4.email);

// Real-world example

const prefix = "user_";
const id = 101;

const obj = {
  [prefix + id]: true
};

console.log(obj);

`Rule

Square brackets evaluate expressions to create property names.`

// 3. Method Shorthand
// ❌ Old way

// const user5 = {
//   name: "A",
//   greet: function () {
//     console.log("Hello");
//   }
// };

// ✅ ES6 Method Shorthand

const user5 = {
  name: "A",
  greet() {
    console.log("Hello");
  }
};

user5.greet();


// 4. All Features Together (Real Example)

const role = "admin";

const user6 = {
  name,
  age,
  [role]: true,
  login() {
    console.log(`${this.name} logged in`);
  }
};

// This single object uses:

// Property shorthand

// Computed property

// Method shorthand

user6.login()

// 5. Edge Cases & Rules (Very Important)
// Computed keys must be expressions

const obj2 = {
  [1 + 2]: "three"
//   key value: 3
};

console.log(obj2);

// Property overwrite rule

const obj3 = {
  a: 1,
  a: 2
};
// a = 2 (last wins)

console.log(obj3);

// Method shorthand ≠ arrow function

const obj4 = {
  arrow: () => console.log(this), // ❌ wrong this
  normal() { console.log(this); } // ✅ correct
};

console.log(obj4);
