/*********************************************************
 * TypeScript Interfaces — Complete Notes
 *********************************************************/

console.log("=== TypeScript Interfaces Notes ===");

/*
Interfaces define the structure of:
- Objects
- Classes
- Functions

They are used to enforce contracts.
*/

// =======================================================
// 1. Interface for Object Structure
// =======================================================

interface Person {
  name: string;
  age: number;
  greet(text: string): void;
}

let user: Person;

user = {
  name: "pratik",
  age: 20,
  greet(text: string) {
    console.log(`${text} ${this.name}`);
  }
};

console.log(user);
user.greet("Hello good morning");

/*
Interface ensures:
- Required properties exist
- Types match
- Methods follow correct signature
*/

// =======================================================
// 2. Interface for Class Structure
// =======================================================

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

  // Extra methods allowed
  print() {
    console.log("Extra method not defined in interface");
  }
}

const p = new GreetClass("pratik");
p.greet("Hello dear");

/*
Important:
Interface defines minimum contract.
Class can have extra properties/methods.
*/

// =======================================================
// 3. Readonly in Interface
// =======================================================

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
    console.log("Car " + this.modelname + " runs at speed " + this.speed);
  }
}

const car = new Car("Mercedes", 30);
car.run();

/*
Notes:
- Interface supports readonly
- Interface does NOT support private/protected
- private/protected belong to class only
*/

// =======================================================
// 4. Extending Interfaces
// =======================================================

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
    console.log(text + " " + this.name);
  }
}

let g2 = new GreetClass2("Rocky");
g2.greet("Hello, this is 2nd greet class");

/*
Interfaces can extend:
- Other interfaces
- Multiple interfaces
*/

// =======================================================
// 5. Interface for Function Types
// =======================================================

// Alternative using type:
// type AddFunc = (a: number, b: number) => number;

interface AddFunc {
  (a: number, b: number): number;
}

const addition: AddFunc = (a, b) => {
  console.log("Sum:", a + b);
  return a + b;
};

addition(2, 3);

/*
Interfaces can describe:
- Callable types
- Function signatures
*/

// =======================================================
// 6. Optional Properties (?)
// =======================================================

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
    console.log(
      this.name + " Has girlfriend => " + (this.hasGF ?? false)
    );
  }
}

const student = new Student("Krish", true);
student.display();

/*
Optional properties:
- May or may not exist
- Access carefully using ?? or optional chaining
*/

// =======================================================
// 7. Interface vs Type
// =======================================================

/*
Interface:
- Extendable
- Better for object contracts
- Can merge declarations

Type:
- Can define union, tuple, primitives
- More flexible for complex types

Rule:
Use interface for objects
Use type for unions / advanced types
*/

// =======================================================
// 8. Declaration Merging (Interface Only)
// =======================================================

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = {
  name: "Tommy",
  age: 5
};

/*
Interfaces support declaration merging.
Types do NOT.
*/

// =======================================================
// 9. Interface in Real Projects
// =======================================================

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Pratik"
  }
};

console.log("API Response:", response);

// =======================================================
// 10. Interview Summary
//
// - Interface defines structure (contract)
// - Classes implement interfaces
// - Supports readonly
// - Supports optional (?)
// - Supports extension
// - Supports declaration merging
// - Cannot define private/protected
//
// Interface = contract
// Class = implementation
//
// =======================================================

console.log("=== Interface Notes Loaded Successfully ===");
