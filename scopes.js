// global scope



// block scope

if (true) {
    let block_let = "block test"
    const block_const = "block test"
    var block_var = "block test"
    console.log(block_let)
    console.log(block_const)
    console.log(block_var)

}

// console.log(block_let)
// out of the block , it cannot be accessed 
// console.log(block_const)
// console.log(block_var)


function scope() {
    // console.log(block_const)

    console.log(block_var)
}

scope();




// lexical scope   // nested
// innner scope can access its parent variable




function one() {
    let x = 10

    function two() {
        console.log(x)
    }
    two();
}




// scope chaining is alwasys butoom to up
one();
let y = 100
function onee() {
    let xx = 10

    function twoo() {
        let xx = 20

        console.log(xx) // first scans the local or its own scope , if its not available then , it searches to it parent scope
        console.log(y)  /// it get from the global scope 
        console.log(z)
    }
    let z = 200
    twoo();

}
onee();


function i() {
    //  let a= 20 ;  this will show
    if(true){
        let a = 20;
        console.log(a)
        a = 300
    }
    console.log(a)
}

i();


//Temopral dead zone  // where we cannot access  let and const hoist in temporal dz
// function completely hoists
// var hoissts 


// function expression 


console.log(fncn1())
var fncn1 = function(){
 console.log("function var")

}
fncn1()


// clossure 
//class
// async
