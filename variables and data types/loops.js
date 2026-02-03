// studying about the loops 
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// while loop
console.log("While Loop Example:");
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
// do-while loop    
console.log("Do-While Loop Example:");
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);     



// do while loop
// do () {while ()}
 

let increment = 0 ;
do {
    console.log(increment);
    increment += 5;

}
while (increment <= 50);



// for loop 
// for (initialization; condition; increment/decrement) {}

for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}



// control transfer statements 
// break and continue and return statements

// break statement
console.log("Break Statement Example:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break; // exit the loop when i is 6 and only prints till 5
    }
    else if (i ===2){
        continue
    }
    console.log(i);
}

// continue statement
console.log("Continue Statement Example:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log(i);
}   




 

console.log("print even numbers form 1 to 10 ")
for (let even= 1 ; even <=10 ; even++){
    if (even % 2 ===0){
        console.log(even);
    }
}
