// rest and spread opreator

// Example Rest 

function addnum(a,b,c, ...other ) {
    console.log(other);
    return a+b+c+ other.reduce((sum, num) => sum + num, 0);
}

const result = addnum(2,3,4,5,6,7,8);
console.log(result);

// spread

let names = ["divyansh" ,"hemant" , "ranveeer" ]

function getnames(name1,name2,name3){
    console.log(name1,name2,name3);
}

getnames(names[0],names[1],names[2]);
getnames(...names);
getnames(names)

// object -> rest 

let students = {
    name: "devuu",
    age: "19",
    passion: ["coding" , "gym"]
}

// const age=students.age;
const {...rest}=students;
console.log(rest);

//spread
let newstudent = {
    ...students,
    age: "20"
}
console.log(newstudent);

// (A) Copy vs Reference (Very Important)\

// old method
// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2.push(4);
// console.log(arr1); 
// console.log(arr2);

// ES6 method
const arr1 = [1,2,3];
const arr2 = [...arr1];

arr2.push(4,5);
console.log(arr2);
console.log(arr1); 

// (B) Merging Arrays

const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];
console.log(merged); 

// (C) Merging Objects

const user = { name: "A", age: 20 };
const extra = { city: "Delhi" };

const mergedUser = { ...user, ...extra };
console.log(mergedUser);
