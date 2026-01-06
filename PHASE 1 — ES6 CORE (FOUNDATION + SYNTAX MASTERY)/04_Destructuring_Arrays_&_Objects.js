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

// 2. Object Destructuring

// Concept
// Object destructuring extracts values by key name, not position

const user =  {
    name: "Divyansh",
    age: 19,
    course: "BSC Maths"
};

const {name, age, course} = user;

console.log(name);
console.log(age);
console.log(course);


// Rename Variables

const user2 = {
    name: "dheeraj",
    age: 20  
};

const {name:  username, age: userAge} = user2;

console.log(username);
console.log(userAge);

// 3. Default Values (Very Important)

// Used when value is missing or undefined.


// Array Default Values

const arr4 = [10];

const [a1, b2 = 50] = arr4;

console.log(a1); // 10
console.log(b2); // 50

// Object Default Values
const user3 = {
  name: "Divyansh"
};

const { name3, age3 = 18 } = user3;

console.log(age3); // 18

// 4. Nested Destructuring

// Used when arrays or objects are inside objects (very common in API data).

// Nested Object
const user4 = {
  name: "Divyansh",
  address: {
    city: "Ajmer",
    state: "Rajasthan"
  }
};

const {
  address: { city, state }
} = user4;

console.log(city);  // Ajmer
console.log(state); // Rajasthan

// Nested Array

const data = [1, [2, 3]];

const [a2, [b3, c3]] = data;

console.log(a2); // 1
console.log(b3); // 2
console.log(c3); // 3

// 5. Real Data Extraction (API-Style Example)

// This is REAL WORLD USE (React, Backend, APIs).

// Example: API Response
const response = {
  status: 200,
  data: {
    user: {
      id: 101,
      name2: "Divyansh",
      skills: ["JS", "Python", "React"]
    }
  }
};

// Extract Only What You Need

const {
  data: {
    user: {
      name2,
      skills: [firstSkill]
    }
  }
} = response;

console.log(name2);       // Divyansh
console.log(firstSkill); // JS


// 6. Destructuring in Function Parameters (Advanced but Common) 

function printuser({name, age}) {
  console.log(name, age);
} 

printuser({
  name: "Hemant",
  age: 19
});

// with default values

function printuser ({name, age = 18}){
  console.log(name,age);
}
 
printuser({ name: "rohit"})

// 7. Why Destructuring is Important

// Cleaner code

// Less repetition (obj.property)

// Mandatory in React (props, useState)

// Makes API data handling easy

// Improves readability & professionalism

// Mastery Practice (Must Do)

// const users = [
//   { id: 1, name: "A", isActive: true },
//   { id: 2, name: "B", isActive: false }
// ];

// Task:
// 1. Extract name & isActive
// 2. Rename isActive to activeStatus
// 3. Give default value if missing
