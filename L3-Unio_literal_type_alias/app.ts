//! Union, | -> pipe in Ts
// either of one data types

// function combine(num1 : number | string,num2 : number | string){
//     let result;
//     if(typeof num1 == 'number' && typeof num2 == 'number'){
//         result = +num1 + +num2;
//     }
//     else{
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }

// const sum = combine(10,20);
// const combinestring = combine("pratik ","singh");
// console.log(sum,combinestring);

//! literal type, | -> used in Ts
// define our own type

// function combine(num1 : number | string,num2 : number | string,convertiontype : "as-number" | "as-string"){
//     let result;
//     if(typeof num1 == 'number' && typeof num2 == 'number' || convertiontype == 'as-number'){
//         result = +num1 + +num2;
//     }
//     else{
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }

// const sum = combine(10,20,"as-number");
// const sum2 = combine("10","70","as-number");
// const combinestring = combine("pratik ","singh","as-string");
// console.log(sum,sum2,combinestring)

//! type alias , type -> used in Ts
// define custom type

// type combinable = number | string; // used combinable rather than number | string
// function combine(
//   num1: combinable,
//   num2: combinable,
//   convertiontype: "as-number" | "as-string",
// ) {
//   let result;
//   if (
//     (typeof num1 == "number" && typeof num2 == "number") ||
//     convertiontype == "as-number"
//   ) {
//     result = +num1 + +num2;
//   } else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// }
// const sum = combine(10, 20, "as-number");
// const sum2 = combine("10", "70", "as-number");
// const combinestring = combine("pratik ", "singh", "as-string");
// console.log(sum, sum2, combinestring);


// more use case =>>>> we fine Object types using alias to increase readibility
type User = {
    name : string;
    age : number;
    skills : string[];
}
const user : User = {
    name : "pratik",
    age : 20,
    skills : ["coding"]
}

function greet(user:User ){
    console.log(`hi, from ${user.name}`);
}
greet(user);
