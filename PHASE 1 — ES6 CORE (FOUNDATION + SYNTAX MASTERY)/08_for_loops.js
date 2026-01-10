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