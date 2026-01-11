// the nullish coalescing operator (??) is a java script operator that is used to provide a default value for a variable that may be null or undefined.

// in javasript, the following values are considered falsy:  false, 0 , "" (an empty string ) , null , undefined , and NAN.

let myval = 0;
const mynumber = myval || 10 ;
const mynumber2 = myval ?? 10 ;

console.log("~ file:  nullish.js:5 ~MYname1: " , mynumber);
console.log("~ file:  nullish.js:6 ~MYname2: " , mynumber2);
