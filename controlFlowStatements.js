// control flow and control statements in js

console.log("CONTROL FLOW STATEMENTS IN JS");

// flows from top to bottom 

// conditional statements
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
}

// switch case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
}
console.log("Day Name:", dayName);


// OTHER SWITCH EXAMPLE
let week = 2
switch (week) {
    case 1:
    case 2:
    case 3:
        console.log("Sunday");
        break;
    case 4:
        console.log("Monday");
        break;
    default:
        console.log("Invalid Day");
}

// loops         console.log("Loop Example:");
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