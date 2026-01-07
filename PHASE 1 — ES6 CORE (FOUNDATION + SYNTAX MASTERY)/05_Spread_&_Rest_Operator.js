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

