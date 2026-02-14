// object, array and tuples
var person = {
    firstname: "pratik",
    age: 1000,
    xyz: {
        address: "mohan road delhi"
    }
};
// console.log(person.lastname); // in js, we can access key which are not in object it returns undefined;
console.log(person);
//! Array type
// let language:string[];
// language = ["english","hindi"];
var language = ["french", "african"];
console.log(language);
//! Any keyword
// for any type in array use any keyword
var arr = ["string", 23, person];
//! Tuple : fixed-length array with fixed types at position
//
var person1 = {
    name: "pratik",
    age: 20,
    skills: new Array("batting", "bowling"),
    product: [20, "Macbook Air"],
};
console.log(person1);
// person1.product[1] = 30; // invalid because 1-indexed is string type
// person1.product = [20,"macbook air", "macbook air pro"];
//! Enum 
var person3 = {
    skills: ["batting", "bowling"],
    product: [20, "macbook"],
    role: "User"
};
if (person3.role == "Admin") {
    console.log("admin");
}
else if (person3.role == "User") {
    console.log("user");
}
else if (person3.role == "ReadOnlyUser") {
    console.log("Read only User");
}
