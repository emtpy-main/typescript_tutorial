/*********************************************************
 * TypeScript Union, Literal & Type Alias — Complete Notes
 *********************************************************/

console.log("=== Union | Literal | Type Alias Notes ===");

/*
These three concepts help us:

- Union      → allow multiple types
- Literal    → allow exact values
- Type Alias → create reusable custom types

They improve readability and type safety.
*/

// =======================================================
// 1. Union Types ( | )
// =======================================================

/*
Union means: either of the given types.
*/

function combineBasic(num1: number | string, num2: number | string) {
  let result;

  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

console.log("Union Number:", combineBasic(10, 20));
console.log("Union String:", combineBasic("Pratik ", "Singh"));

/*
Union Types are commonly used when:
- API values can vary
- Inputs may be number or string
*/

// =======================================================
// 2. Literal Types
// =======================================================

/*
Literal types restrict values to EXACT strings or numbers.
*/

function combineLiteral(
  num1: number | string,
  num2: number | string,
  conversionType: "as-number" | "as-string"
) {
  let result;

  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

console.log(combineLiteral(10, 20, "as-number"));
console.log(combineLiteral("10", "70", "as-number"));
console.log(combineLiteral("Pratik ", "Singh", "as-string"));

/*
Literal types prevent invalid values:

combineLiteral(10,20,"random") ❌
*/

// =======================================================
// 3. Type Alias
// =======================================================

/*
Type alias lets us define custom reusable types.
*/

type Combinable = number | string;
type Conversion = "as-number" | "as-string";

function combineAlias(
  num1: Combinable,
  num2: Combinable,
  conversionType: Conversion
) {
  let result;

  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    conversionType === "as-number"
  ) {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}

console.log(combineAlias(10, 20, "as-number"));
console.log(combineAlias("10", "70", "as-number"));
console.log(combineAlias("Hello ", "TS", "as-string"));

/*
Type Alias improves:
- Readability
- Maintainability
- Reusability
*/

// =======================================================
// 4. Object Type Alias (Very Common)
// =======================================================

type User = {
  name: string;
  age: number;
  skills: string[];
};

const user: User = {
  name: "Pratik",
  age: 20,
  skills: ["coding"]
};

function greet(user: User) {
  console.log(`Hi, from ${user.name}`);
}

greet(user);

/*
Object aliases are heavily used in:
- Backend models
- API responses
- Redux state
- React props
*/

// =======================================================
// 5. Union with Object Types
// =======================================================

type Admin = {
  role: "admin";
  permissions: string[];
};

type NormalUser = {
  role: "user";
};

type AppUser = Admin | NormalUser;

function checkRole(user: AppUser) {
  if (user.role === "admin") {
    console.log("Permissions:", user.permissions);
  } else {
    console.log("Normal user");
  }
}

// =======================================================
// 6. Literal + Union = Discriminated Union
// =======================================================

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  side: number;
};

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
This pattern is called Discriminated Union.
Very powerful.
*/

// =======================================================
// 7. Type Alias vs Interface
// =======================================================

/*
Type Alias:
- Can define union & primitives
- Cannot be merged

Interface:
- Best for objects/classes
- Supports declaration merging

Rule:
Use type → unions / literals
Use interface → objects
*/

// =======================================================
// 8. Interview Summary
//
// Union:
// - allows multiple types
//
// Literal:
// - allows exact values
//
// Type Alias:
// - reusable custom types
//
// Used everywhere in:
// - APIs
// - Models
// - Props
// - State
//
// =======================================================

console.log("=== Union / Literal / Type Alias Notes Loaded ===");
