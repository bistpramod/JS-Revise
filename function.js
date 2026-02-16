



// function invocation

function green (){
    console.log("This is green color");
}


green()
 

// function add (){
//   let x = 10;   
//     let y = 20;
//     console.log("Sum is :" , x + y);
// }

// add()

function greet(name = "this will show if we didnt give any value ie this is the defailt parameter")
{
    console.log("Hello " + name + " , Good Morning!");  // name ko value xaina
}

greet("robin"); // name ko value robin aayo
greet("john"); // name ko value john aayo
greet()
 



// adding function sum(a, b) {
function sum (a,b=0){
    
    console.log (a+b)
}

const addition = sum (3,2)
console.log(addition) // it does not return the value
sum(15) // a is assigned but b is not defined so to print out the value we should assigne the value og b to 0 sum(a, b=0)





// with return type

console.log("NOW THE RETURN WILL WORK")

function sum (a,b=0){
    
    let adding = a+b
    return adding

    return sum;

    console.log("there will be no use of code after return tag")
}

const addition_2 = sum (3,2)
console.log(addition_2)// it does not return the value
console.log(sum(6,6))
sum(15) // a is assigned but b is not defined so to print out the value we should assigne the value og b to 0 sum(a, b=0) and it wont work after removing the console.log line inside the function

 


//what is expresiion 
// function expression 
const summ= function (o,p)
{
    return o+p

}

console.log(summ(10,10))




