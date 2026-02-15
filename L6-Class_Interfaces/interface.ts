//! interfaces
console.log("|^|======= Interface =======|^|");
//! to define object types
interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person;
user = {
  name: "pratik",
  age: 20,
  greet(text): void {
    console.log(`${text} ${this.name}`);
  },
};
console.log(user);
user.greet("Hello good morning");

//! to define class structure
interface Greetable {
  name: string;
  greet(text: string): void;
}
class GreetClass implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(text: string): void {
    console.log(text + " " + this.name);
  }
  print() {
    // if i can add new method except from interface what is usage of interface
  }
}
const p = new GreetClass("pratik");
p.greet("Hello dear");

//! interface have readonly but not private, protected, private because they are used in class
interface Vehicle {
  readonly modelname: string;
  speed: number;
  run(): void;
}
class Car implements Vehicle {
  modelname: string;
  speed: number = 0;
  constructor(name: string, speed: number) {
    this.modelname = name;
    this.speed = speed;
  }
  run(): void {
    console.log("Car " + this.modelname + " run at speed" + this.speed);
  }
}
const car = new Car("mercedes", 30);
car.run();

//! Extending
interface Named {
  name: string;
}
interface Greetable2 extends Named {
  greet(text: string): void;
}
class GreetClass2 implements Greetable2 {
  name: string;
  constructor(s: string) {
    this.name = s;
  }
  greet(text: string): void {
    console.log(text + this.name);
  }
}
let g2 = new GreetClass2("Rocky");
g2.greet("Hello , this is 2nd greet class ");

//! define function types
// type addfunc = (a:number , b:number)=> number;
interface addfunc {
  (a: number, b: number): number;
}
const addition: addfunc = (a, b) => {
  console.log("sum ", a + b);
  return a + b;
};
addition(2, 3);

//! optional feature => ?
interface Boys {
    name: string;
    hasGF?: boolean;
}
class Student implements Boys {
    name: string;
    hasGF?: boolean;
    constructor(name: string, value: boolean = false) {
        this.name = name;
        this.hasGF = value;
    }

    display() {
        console.log(this.name + " Has girlfriend => " + (this.hasGF ?? false));
    }
}
const student = new Student("Krish",true);
student.display();
