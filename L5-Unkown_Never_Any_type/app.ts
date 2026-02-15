//! unknown
let userinput : unknown;
// let userinput : any;
let username : string;

userinput = 10;
userinput = "shiva";
username = "pratik";

// username = userinput ; // Type 'unknown' is not assignable to type 'string'
// username = userinput ; // assignable for any type to string because compiler stop check types of any type variable.

// we can assign unknow type to string type after checking;
if(typeof userinput === 'string'){
    username = userinput;
}

//! different between unkown and any 
// any disables TypeScript completely, 
// while unknown forces us to perform type checking before usage, making unknown much safer.

//! never => 
// never represents values that will never occur, and is commonly used for functions that never return and for exhaustive type checking.
const generaterror = function(message : string,statuscode : number) : never {
    throw {message,statuscode}
}
console.log(generaterror("internal server error",500));
