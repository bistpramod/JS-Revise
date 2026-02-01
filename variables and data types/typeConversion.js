// all the type conversion in js




console.log(Number("TYPE CONVERSION IN JS"));

// Converts string to number

// implicit and explicit  conversion

// implicit conversion  )type coercion)
let result1 = '5' + 10; // '510' (string)   ::: in this case operator is overloaded by js engine to perform string concatenation
console.log(result1); // Output: '510'

console.log(10 + '10')
console.log('10' - 5)  // here - operator is not overloaded so it converts string to number
console.log('10' * 2)
console.log('10' / 2)
console.log( 10 - '5'   )
console.log( 10 - 'aa'   )    
console.log( 10 + 'da'   )    






// explicit conversion
let result2 = Number('5') + 10; // 15 (number)
console.log(result2);
console.log(Boolean(result2)) // Output: true  
// the BOOLEAN OUTPUT OF THE NUMBER 0 IS ALWAYS FALSE

 
let strNum = '123';
let numFromString = Number(strNum); // Converts string to number
console.log(numFromString); // Output: 123

let num = 456;
let strFromNumber = String(num); // Converts number to string
console.log(strFromNumber); // Output: '456'

let boolValue = true;
let numFromBool = Number(boolValue); // Converts boolean to number
console.log(numFromBool); // Output: 1

let nullValue = null;
let numFromNull = Number(nullValue); // Converts null to number
console.log(numFromNull); // Output: 0

let undefinedValue = undefined;
let numFromUndefined = Number(undefinedValue); // Converts undefined to number
console.log(numFromUndefined); // Output: NaN   



// some  diff expamples 
 let numberr = 10
 console.log(String(numberr)) 
 console.log(numberr.toString() )


 console.log(parseInt(numberr))




 // truthy and falsy values in js
 

 console.log("truthy and falsy values in js");

 // falsy values : 0 , "", null , undefined , NaN , false
 console.log(Boolean("")) // false

//example
let group = 10 
if (group){
    console.log("This is a truthy value");
} else {
    console.log("This is a falsy value");
}

 //d


 if (" "){
    console.log(true);  // out put is true anbecause there is a space in hte condition

}



// tommorrow is control flow
