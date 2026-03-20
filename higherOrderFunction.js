// read this , its an revision

// higher order function
const hof = () =>{
    console.log("higher order function ")
    const child = () =>{
        console.log("chiled function")
    }

    return child;
}

const children = hof()
children()



// generator 
 function* generate (){  //not much used ,can be used while infinite scrolling in frontend

    let i = 0 
    while(true){
         i++
        yield i   
       
    }
}
 console.log(generate().next())
 console.log(generate().next())
 console.log(generate().next())
 console.log(generate().next())



 // anonymous function 


 // IIFE function
 
