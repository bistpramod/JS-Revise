// some methods should be remembered in arrays

// higher order methods

const numbers= [1,2,3,4,6,7,8,]


// looping array
// for each 
// arr.forEach(callback)


const callBack = () => {

}

numbers.forEach(callBack)


// filete 
//arr.filter(callback)
// returns new array



// reduce // arr.reduce(callback,initialValue)
// returns single value





const numbers2 = [1,2,3,4,5,6,7,8];

const sum = numbers2.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(sum); // 36


// 

const students = [
    {
        name : "John",
        age : 20,
        grade : 80,
        marks : [80, 85, 90, 44, 23, 50],
     },
     {
        name : "Jane",
        age : 22,
        grade : 90,
            marks : [90, 95, 100, 88, 77, 66]
     },
     {
        name : "Jack",
        age : 21,
        grade : 85,
            marks : [85, 90, 15, 1, 70, 60]
    }
]


// const averageMarks = student.map((student) => {
// const totalMarks = student.marks.reduce ((prev,curr) => {
//     return prev+curr



// const average = totalMarks / student.marks.length;

// })
// const averageStudents = averageMarks.filter(student => student.average >60);

// console.log(averageStudents)

//map
 // reduce 
 //filter 
 //map 


const calculateAverageMarks = (students) => {
    const total_marks = students.reduce((acc,marks)=>{
        return(acc+=marks)
        
    },0)
    const avg= total_marks / students.length;
    return avg;
};
const new_arr =students.map((student)=>{
    student["avg_mark"]= calculateAverageMarks(student.marks);
    return student

})
.filter((marks)=> marks.avg_mark >= 60)
.map(students=>students.name)
console.log(new_arr);

// scope chaining





