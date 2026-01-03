const name = "hitesh"
const repoCount = 50

// old way to print different variables
// console.log(name + repoCount + " Value");

// Template literals and interpolation ${}

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const a = 10;
const b = 5;

console.log(`sum of ${a} and ${b} is: ${a + b}`);


const gameName = new String('hitesh-hc-com')


// Modern String Methods (ES6+)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));