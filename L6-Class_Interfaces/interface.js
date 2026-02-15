//! interfaces
console.log("|^|======= Interface =======|^|");
let user;
user = {
    name: "pratik",
    age: 20,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
};
console.log(user);
user.greet("Hello good morning");
class GreetClass {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(text + " " + this.name);
    }
    print() {
        // if i can add new method except from interface what is usage of interface
    }
}
const p = new GreetClass("pratik");
p.greet("Hello dear");
class Car {
    constructor(name, speed) {
        this.speed = 0;
        this.modelname = name;
        this.speed = speed;
    }
    run() {
        console.log("Car " + this.modelname + " run at speed" + this.speed);
    }
}
const car = new Car("mercedes", 30);
car.run();
class GreetClass2 {
    constructor(s) {
        this.name = s;
    }
    greet(text) {
        console.log(text + this.name);
    }
}
let g2 = new GreetClass2("Rocky");
g2.greet("Hello , this is 2nd greet class ");
const addition = (a, b) => {
    console.log("sum ", a + b);
    return a + b;
};
addition(2, 3);
class Student {
    constructor(name, value = false) {
        this.name = name;
        this.hasGF = value;
    }
    display() {
        console.log(this.name + " Has girlfriend => " + (this.hasGF ?? false));
    }
}
const student = new Student("Krish", true);
student.display();
export {};
//# sourceMappingURL=interface.js.map