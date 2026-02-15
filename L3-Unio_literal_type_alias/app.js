//! Union, | -> pipe in Ts
// either of one data types
var user = {
    name: "pratik",
    age: 20,
    skills: ["coding"]
};
function greet(user) {
    console.log("hi, from ".concat(user.name));
}
greet(user);
