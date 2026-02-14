// object, array and tuples

const person : {
    firstname : string ;
    age : number ;
    xyz : {
        address : string;
    }
} = {
    firstname : "pratik",
    age : 1000,
    xyz : {
        address : "mohan road delhi"
    }
}
// console.log(person.lastname); // in js, we can access key which are not in object it returns undefined;
console.log(person);


//! Array type
// let language:string[];
// language = ["english","hindi"];
const language:string[] = ["french","african"];
console.log(language);

//! Any keyword
// for any type in array use any keyword
const arr : any[] = ["string",23,person]

//! Tuple : fixed-length array with fixed types at position
//
const person1 : {
    name : string;
    age : number;
    skills : string[];
    product : [number,string]
} = {
    name : "pratik",
    age : 20,
    skills : new Array("batting","bowling"),
    product : [20,"Macbook Air"],
}
console.log(person1);

// person1.product[1] = 30; // invalid because 1-indexed is string type
// person1.product = [20,"macbook air", "macbook air pro"];


//! Enum 
enum Role {Admin, User, ReadONlyUser};
const person3 : {
    skills : string[];
    product : [number,string];
    role : Role;
} = {
    skills : ["batting","bowling"],
    product : [20,"macbook"],
    role : Role.Admin
}

if(person3.role == Role.Admin){
    console.log("admin");
}
else if(person3.role == Role.User){
    console.log("user");
}
else if(person3.role == Role.ReadONlyUser){
    console.log("Read only User")
}