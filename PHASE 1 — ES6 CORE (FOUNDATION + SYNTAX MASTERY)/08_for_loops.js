// for 

for (let i = 0; i <= 10 ; i++) {
    const element = [i];
    debugger;
    console.log(i);
}

// for loop in for loop

for (let i = 1; i < 11 ; i++) {
    for (let j =1 ; j < 11; j++) {
        debugger
        console.log( `${i} X ${j} = ${i*j}` );
        if(j == 10){
            console.log("");
        }
    }
    
}

// for loop in array 
let marvel = [ "Iron man" , "Spider man" , "hulku" , "Caption america" , "Thor"]

for (let i = 0; i < marvel.length; i++) {
    const element = marvel[i];
    console.log(element);
}

// break and continue

for (let i = 0; i <= 10; i++) {
    const element = [i];
    console.log(i);
    if( i == 5){
        console.log("detected");
        break
    }
}
for (let i = 0; i <= 10; i++) {
    const element = [i];
    console.log(i);
    if( i == 5){
        console.log("detected the number 5");
        continue
    }
}

// while and do while loop 

// i = 0

// while(i < 20){
//     console.log(i);
//     i++
// }

i = 0

do{
    console.log(i);
    i++
}while(i <= 20)

// for of 

const arr = [1,2,3,4,5,6,7]

for (const Array of arr) {
    console.log(Array); 
}

const Array = ["divyansh" , "hemant" , "ranveer" , "dheeraj"]

for (const num of Array) {
    console.log(num);
}

const name = "divyansh yadav"

for (const char of name) {
    console.log(`each char is: ${char}`);
    
}

const map = new Map()

map.set("In" , "india")
map.set("US" , "unitied state of america")
map.set("fr" , "france")
map.set("In" , "india")

console.log(map);

for (const [key , value] of map) {
    console.log(`${key} :- ${value}`);
    
}