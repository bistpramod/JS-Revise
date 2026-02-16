// arrays


// let fruits = ["Apple", "Banana", "Cherry"];

//new keyword
// array literal
// []


let numbers = [10, 20, 30, 40, 50];
console.log("Numbers Array:", numbers);


console.log(numbers[numbers.length-1]); // accessing the last element of the array
console.log(numbers[-1]); // undefined as negative index is not supported in JS
console.log(numbers)
console.log(numbers.length)
console.log(numbers.at(0)); // accessing the first element using at() method
console.log(numbers.at(-1)); // accessing the last element using at() method


// SLICE METHOS   // also returns
console.log(numbers.slice(1, 4)); // extracts elements from index 1 to 3
console.log(numbers.slice(2)); // extracts elements from index 2 to the end
console.log(numbers.slice(-3)); // extracts the last 3 elements

//spilce method  // also returns
// modifies the original array
numbers.splice(2, 1); // removes 1 element at index 2
console.log("After splice:", numbers);


// splice (start , deleteCount , tem 1 , item 3 , item n ) 
numbers.splice(1, 0, 25); // adds 25 at index 1 without removing any element
console.log("After splice add:", numbers);

numbers.splice(2, 1, 35, 33, 334); // replaces 1 element at index 2 with 35 // multiple can be added

console.log("After splice replace:", numbers);






// ARRAY CREATION 


//arra literal and new keyword

let fruits = new Array("Apple", "Banana", "Cherry" , 'Cherry') ; // its similar to let fruits = ["Apple", "Banana", "Cherry"];

// reading the element of the array  
// we can add the new element in the array using index

//add
console.log("array before the operation :", fruits); 

fruits.push("Mango"); // adding new element at the end
fruits.push("banananana","orangey") // we can add multiple elements at the end 

console.log("Fruits Array:", fruits);

// removint the element from the array 
fruits.pop(); // removes the last element
fruits.pop("banananana")
console.log("array after pop operation :", fruits);

//pop not only removes but also returs the removed the element
let removedFruit = fruits.pop();
console.log("Removed Fruit:", removedFruit);
console.log("array after pop operation :", fruits);

// removing the first element
fruits.shift(); // removes the first element  and this element is also returned by shift method
console.log("array after shift operation :", fruits);  



// IF WE WANT TO SEARCH THE ELEMENT IN THE ARRAY//  we use includes and it always returns boolean 

console.log("Does fruits array include 'Banana'?", fruits.includes("Banana")); // true
console.log("Does fruits array include 'Pineapple'?", fruits.includes("Pineapple")); // false

// find the index of an element in the array
let index = fruits.indexOf("Cherry");
console.log("Index of 'Cherry':", index); // 1

// if the element is not found, indexOf returns -1
let notFoundIndex = fruits.indexOf("Pineapple");  // search for the value and when it finds it it exits the loop and it does not check for the remaining elements
console.log("Index of 'Pineapple':", notFoundIndex); // -1
let FoundIndex = fruits.lastIndexOf("cherry");   // it searches from the end of the array
console.log("Index of 'cherry':", FoundIndex); // 2



// array methods will be  done while studying functions in detail
// map , filter , reduce , forEach etc



// FOR OF AND FOR IN 

// FOR OF LOOP IS FOR ITERRABLES LIKE ARRAYS , STRINGS
// FOR IN LOOP IS FOR OBJECTS

let user = {
    name: "John",
    age: 30,
    city: "New York",
    email: "abc@gamil"

}

for (let anyVariable in user ){
    console.log(anyVariable);  // it returns the keys of the object
    console.log(user[anyVariable]); // it returns the values of the object  // we cannot use dot notation here because anyVariable is a variable
    // for in can be used in array but we wont get any values
    
}


// now for of loop
for (let anysecondVariable of fruits){
    console.log(anysecondVariable);  // it returns the values of the array

    // for of cannot be used in objects because its not itereable
    
}
