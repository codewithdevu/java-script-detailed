// the nullish coalescing operator (??) is a java script operator that is used to provide a default value for a variable that may be null or undefined.

// in javasript, the following values are considered falsy:  false, 0 , "" (an empty string ) , null , undefined , and NAN.


// Nullish Coalescing (??)

let myval = 0;
const mynumber = myval || 10 ;
const mynumber2 = myval ?? 10 ;

console.log("~ file:  nullish.js:5 ~MYname1: " , mynumber);
console.log("~ file:  nullish.js:6 ~MYname2: " , mynumber2);

// Optional Chaining (?.)

// optional chaining is a feature in javasript that allows you to acess properties of an object or elements of an array  without having to check whether the object or array is null or undefined first. it is repreesented by the ?.  operator and can be used to concisely access deeply nested properties without having to write a long chain of id if statements to check for null or undefined values.

const user = {
    name: "thapa",
    age: 28,
    address: {
        street: "mian st",
        city: "new road",
        state: "rajasthan",
        zip: 10101,
    },
};

console.log(user.address.housenumber?.roadnumber);
