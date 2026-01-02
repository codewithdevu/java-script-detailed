// 1. this concept

const user = {
    username: "divyansh",
    userEmail: "divyanshyadav@gmaill.com",

    sendmessage : function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
        
    }
}

// user.sendmessage()
// user.username = "hemant"
// user.sendmessage()
// user.username = "dheeraj"
// user.sendmessage()

// global this
// console.log(this); // {}

// function this 

// function chai (){
//     let username = "divyansh"
//     console.log(this.username);
// }

//chai()

// const chai = function() {
//     let username = "divyansh"
//     console.log(this.username);
// }

// chai()

// 2. Arrow function 

// const chai = () => {
//     let username = "divyansh"
//     console.log(this.username);
// }

// chai()


const addnum = (num1 , num2)=>{
    return num1 + num2 ;
}

console.log(addnum(3 , 4));

// 3. Implicit return

const addtwo = (num1 , num2) => num1 + num2
console.log(addtwo(10 , 10));

const name = () => ({username: "divyansh"})

console.log(name());





