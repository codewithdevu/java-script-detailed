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

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));