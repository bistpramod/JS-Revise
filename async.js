// async


//? in synchronous , all the code is executed in synchronous order , but in async methoud , the code is executed in asynchronous order


const add = (a,b) =>{
    console.log(a+b)

}

//!setTimeout 
// setTimeout(callback,timeout)

console.log("start")
const timerId = setTimeout((name,age)=>{
    console.log("processing")

},
1000,
"john",
27,
)
console.log(timerId)
clearTimeout(timerId)
console.log(timerId)

console.log("end");


//!set interval

let count = 0;
const timerID = setInterval(()=>{
    console.log(count)
    if (count=== 10){
        clearInterval(timerID)

    }
    count +=1;

},1000)
console.log("end")





// fetchUser

const fetchUser = (callback) =>{
    setTimeout(() => {
        console.log("user fetched")
callback();
        
    },2000 )

};

const fetchPost = () =>{
    setTimeout(() => {
        console.log("user post fetched")
console.log("users post fetched for user", UserActivation.id)

        
    },1000);
};

fetchUser((err,user)=>{
    if (err){
        console.log(err)
        return;

    }
    fetchPost(user)
});
console.log("end")
