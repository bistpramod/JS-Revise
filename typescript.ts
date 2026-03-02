//! typescript

//* data types 
//number
//string
//oolean
// numm 
// undefined 
//enum

//any
//unknown


//variable declaration methods
// let const var

//? number
let b: number =34;
b= 23;
//b = true


//?string
let c : string = "";




let g : unknown ;
g = 34;
g = "unknown ";


g = '11'
if (typeof g === "string"){
    console.log(g.padEnd(4,"0"))
}



//? array
let numbers = ['',2,true,]


//? tuple

// ?  utility typess



//intersetion 
type A = {
    a: string;

};
type B ={
    b: string;
};

type C ={
    c: string;
};

type A_and_B = A&B
type A_or_B= A | B

let ab:A_and_B ={
    a:'',
    c:'',
    b:'',
}
let a_orb:A_or_B ={
    a:'',
    b:'',
};
