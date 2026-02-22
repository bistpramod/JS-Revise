// to avoid the callback hell , we use promises
//pyramid of doom
 // interview qns

 //promises is async task


 //*pending
 //*fulfilled
 //*rejected

//  const promise = new Promise((resolve,reject)=>{
//     // task
//     setTimeout(()=>{
//         // resolve('promise resolved')
//         reject('promise rejected')

//     },2000)

//  })

//  console.log(promise)

//  //!  handling promises
//  //.then
//  promise
//  .then((data)=>{
//  console.log(data)
//  })
//  .catch((error)=>{
//     console.log(error)
//  })
//  .finally(()=>{
//     console.log("finally")
//  })

//  console.log("end")

//  //!then and catch are boolean values , only one runs at a time 


//  // yesterdays qn

//  const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;

//       if (error) {
//         reject({ message: "User fetch failed" });
//       } else {
//         resolve({ name: "John", id: 1 });
//       }

//     }, 2000);
//   });
// };

// const fetchPost = (user) =>{
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let error = false;
//             if(error){
//                 reject({message:" fetching failed"})
//             }else{
//                 resolve([
//                     {id: 1, userId: user.id, titles :"post 1"},
//                     {id: 2, userId: user.id, titles :"post 2"},
//                 ])
//             }
//         },3000)
//     })
// }

// // const userPromise = fetchUser(); userPromise
// fetchUser()
// .then((user)=>{
//     console.log(user)
//     .catch((err)=>{
//         console.log(err)

//     })

// })
// fetchPost({id:1})
// .then((posts) =>{
//     console.log(posts);

// })
// .catch((err)=>{
//     console.log(err);
// })



// // promise chaining
// console.log("end")



//! main part is how do we handle promises , like promise chaining


fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>{
    // console.log(response)
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("end")


//! async await 

//async
const add = async () =>{



}

add()
console.log("end twice") 
//! do some from github , i missed these




const fetchData = async () =>{
    try {
        const postRes =await fetcj (

        );
    }
}


//sunday event loop