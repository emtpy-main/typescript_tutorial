/*********************************************************
 * TypeScript Type Guards & Type Assertions — Complete Notes
 *********************************************************/

console.log("=== Type Guards & Type Assertions ===");

/*
Type Guards help TypeScript understand WHICH type
a variable currently holds inside a union.

Type Assertion (Type Casting) tells TypeScript:
"Trust me, I know the type."
*/

// =======================================================
// 1. typeof Type Guard (Primitive Types)
// =======================================================

type Combinable = string | number;

function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log("Add:", add(8, 8));
console.log("Add:", add("Hello ", 10));

/*
Used for:
- string
- number
- boolean
- bigint
- symbol
*/

// =======================================================
// 2. "in" Operator Type Guard (Object Types)
// =======================================================

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

const emp1: ElevatedEmployee = {
  name: "Chris",
  privileges: ["AWS IAM"],
  startDate: new Date(2024, 2, 3)
};

function printDetails(emp: UnknownEmployee) {
  console.log("Name:", emp.name);

  // Safe property access using "in"
  if ("privileges" in emp) {
    console.log("Privileges:", emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date:", emp.startDate);
  }
}

printDetails(emp1);

/*
"in" is used when:
- Working with union object types
- Properties differ between types
*/

// =======================================================
// 3. instanceof Type Guard (Classes)
// =======================================================

class Car {
  drive() {
    console.log("Driving Car...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }

  loading(quantity: number) {
    console.log("Loading:", quantity);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // Option A: using "in"
  if ("loading" in vehicle) {
    vehicle.loading(500);
  }

  // Option B: using instanceof (preferred for classes)
  if (vehicle instanceof Truck) {
    vehicle.loading(800);
  }
}

useVehicle(new Car());
useVehicle(new Truck());

/*
instanceof works ONLY with classes (runtime objects).
*/

// =======================================================
// 4. Custom Type Guard (User Defined)
// =======================================================

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return "swim" in animal;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

/*
animal is Fish  <-- custom guard tells TS this
*/

// =======================================================
// 5. Discriminated Union (Best Pattern)
// =======================================================

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square;

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.side * shape.side;
  }
}

/*
Discriminated unions use a common field ("kind")
for automatic narrowing.
*/

// =======================================================
// 6. Type Assertion / Type Casting
// =======================================================

/*
Type Assertion tells TS:
"I know better, trust me."
*/

// HTML Input Example

// Old style:
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;

// Modern style:
const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "Hi Patel";

/*
!  → non-null assertion
as HTMLInputElement → type assertion
*/

// =======================================================
// 7. Double Assertion (Avoid if possible)
// =======================================================

let value: unknown = "hello";

let forcedString = value as unknown as string;

/*
Dangerous — breaks type safety.
Avoid in production.
*/

// =======================================================
// 8. When NOT to use Type Assertion
// =======================================================

/*
❌ Don't use assertion to hide real errors
❌ Don't replace proper guards with "as"
*/

// =======================================================
// 9. Interview Summary (Read Only)
//
// Type Guards:
// - typeof
// - in
// - instanceof
// - custom guards
// - discriminated unions
//
// Type Assertion:
// - as Type
// - <Type>
// - non-null !
//
// Type Guard = runtime check
// Type Assertion = compile-time override
//
// Prefer Guards over Assertions.
//
// =======================================================

console.log("=== Type Guard Notes Loaded ===");
