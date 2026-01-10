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

