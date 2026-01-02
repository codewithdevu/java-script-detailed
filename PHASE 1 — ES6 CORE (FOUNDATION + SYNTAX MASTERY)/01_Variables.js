// let, const & var (scope + TDZ)

let firstname = "divyansh"
var lastname = "yadav"
const passion = "coding"

// 1. Scope (kahaan accessible hota hai)

// var (function scope)

function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible)
}

// var block ke bahar bhi chal jata hai

// let and const (block scope)

// if (true) {
//   let a = 10;
//   const b = 20;
// }
// console.log(a); // Error
// console.log(b); // Error

// let aur const sirf { } ke andar valid hote hain

// 2. Re-declaration (same naam dobara)

// var x = 10;
// var x = 20; // no error

// var --> allowed

// let y = 10;
// let y = 30; // error 

// const z = 10;
// const z = 35; // error

// let and const --> not allowed

// 3. Re-assignment (value badal sakte ho?)

var x = 10;
x = 20;

// var --> yes

let y = 10;
y = 20;

// let --> yes

// const z = 10;
// z = 20; // Error

// const --> No

// 4. Hoisting (JS upar le jata hai?) + TDZ (Temporal Dead Zone)

console.log(a); // undefined
var a = 10;

// hoisted + undefined 

// let and const 

// console.log(b); // Error
// let b = 10;

// console.log(c); // Error
// const c = 10;


// hoisted but TDZ error

// TDZ (Temporal Dead Zone):
// Declaration se pehle access karna mana hai.

// 5. const ke saath objects & arrays (important confusion)

// 1) object {}

const user = { name: "Ram" };
user.name = "Shyam"; // Allowed

console.log(user.name);

// user = {};  // Error

// 2) array []

const arr = [1,2,3];
arr.push(4); // Allowed
console.log(arr);

// arr = [];    // ❌ Error

// Rule:  const ka reference fix hota hai, Data mutate = object ke andar change allowed (user.name = "shyam")

// 6. Real-world usage rule (yaad rakhne ka shortcut)
// Situation	Use
// Value change hogi	let
// Value kabhi change nahi hogi	const
// Old JS / avoid	var








