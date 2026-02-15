

//! function return type
// function add(a:number,b:number) : number{
//     return a+b;
// }
// console.log(add(10,40));

// function greet(name : string) : void {
//     console.log(`hi, good morning ${name}`);
// }
// greet("pratik");

// variable holding function;
// let combineFunction : Function;
// combineFunction = add ;
// combineFunction = greet ; 
// console.log(combineFunction(2,3));

//====> you can notice a problem using function keyword that we can assign multiple function to same varaible but during calling there are variation in no. of parameters
// If we assign functions to a variable without specifying its type, TypeScript infers it as any, allowing multiple function shapes and parameter counts. To avoid this, we must define explicit function types or use function overloading.

// good pratice ***
// let combineFunction : (a : number, b: number) => number;
// combineFunction = add;
// console.log(combineFunction(100,200));

// callback functions 
function addHandle(num1: number,num2:number, cb : (n: number)=> void) : void {
    let result = num1 + num2;
    cb(result);
}
addHandle(60,70,(result)=>console.log(result));
//==== arrow function 
let addition = (a : number,b: number, cb : (result : number)=> void) : void =>{
    let result = a + b;
    cb(result);
}
addition(80,80,(result) => console.log(result));