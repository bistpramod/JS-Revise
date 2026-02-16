const parent =()=>{
    let x = 0 
    const child = () =>{
        x += 1;
        console.log(x)

    }
    return child ();
}

const childFN = parent ();  // clossure is formed here



// when is clossured formed 



// const createCounter = () => {
//     let count = 0; 
//     const updateCount  = ()=>{
//        console.log(count)
//        count++

//     }

//  return updateCount;


// }

// const counter = createCounter()
// const counter1 = createCounter()


// counter()  //0  
// counter()    //1
// counter1()    //0
// counter1()    //1
// counter()    //2

// counter()   // 3

// // reference is changed



const createCounter = (counter = 0) => {
    let count;
    const updateCount  = ()=>{
       console.log(count)
       count++

    }
    const resetCount = () =>{
        count = counter;
        
    }

    const object  = {

        updateCount:updateCount,
        resetCount: resetCount,
    }
    return object
  



}

const counter0 = createCounter()
const counter1 = createCounter()



counter0()  //0  
counter0()    //1
counter1()    //0
counter1()    //1
counter0()    //2

counter0()   // 3

// reference is changed



// new corrected code

const buildCounter = (startValue = 0) => {
  let currentValue = startValue;

  const increase = () => {
    console.log(currentValue);
    currentValue++;
  };

  const reset = () => {
    currentValue = 0;
  };

  return {
    increase,
    reset,
  };
};

const firstCounter = buildCounter();
const secondCounter = buildCounter();

firstCounter.increase();   // 0
firstCounter.increase();   // 1

secondCounter.increase();  // 0
secondCounter.increase();  // 1

firstCounter.increase();   // 2
firstCounter.increase();   // 3




//TODO createAccount(name,initialAmount) return withdraw , deposit , inquiry , getDetail

//