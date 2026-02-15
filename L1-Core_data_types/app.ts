/*********************************************************
 * TypeScript Core Data Types — Complete Notes
 *********************************************************/

console.log("=== TypeScript Core Data Types ===");

/*
Core primitive types in TypeScript:

- number
- string
- boolean
- null
- undefined
- bigint
- symbol

TypeScript adds static typing to JavaScript.
*/

// =======================================================
// 1. number
// =======================================================

let num1: number = 20;
let num2: number = 30;

console.log("Numbers:", num1, num2);

/*
number includes:
- integers
- floats
- negative numbers
- NaN
*/

// =======================================================
// 2. string
// =======================================================

let message: string = "Hello World";

// Template literal (ES6)
let greeting: string = `ES6 feature backtick: ${message}`;

console.log(greeting);

/*
string supports:
- single quotes
- double quotes
- backticks (template literals)
*/

// =======================================================
// 3. boolean
// =======================================================

let isActive: boolean = true;

if (isActive) {
  console.log("Boolean works");
}

// =======================================================
// 4. Function Using Core Types
// =======================================================

function add(
  num1: number,
  num2: number,
  print: boolean,
  message: string
): number {

  if (print) {
    console.log("Print is true");
  }

  console.log(`Message: ${message}`);

  return num1 + num2;
}

console.log(add(num1, num2, true, "Hello World"));

/*
Important:
Always specify return type for clarity.
*/

// =======================================================
// 5. null and undefined
// =======================================================

let u: undefined = undefined;
let n: null = null;

/*
With strictNullChecks:
null and undefined must be handled explicitly.
*/

// =======================================================
// 6. bigint
// =======================================================

let bigNumber: bigint = 123456789123456789n;
console.log("BigInt:", bigNumber);

/*
Used for very large integers.
*/

// =======================================================
// 7. symbol
// =======================================================

let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");

console.log(sym1 === sym2); // false

/*
Symbols are unique.
*/

// =======================================================
// 8. Type Inference
// =======================================================

let age = 25; // inferred as number
let nameStr = "Pratik"; // inferred as string

/*
TS automatically infers types when possible.
*/

// =======================================================
// 9. Literal Types (Related Concept)
// =======================================================

let role: "admin" | "user";
role = "admin";
// role = "guest" ❌ error

// =======================================================
// 10. Interview Summary
//
// Core Types:
// - number
// - string
// - boolean
// - null
// - undefined
// - bigint
// - symbol
//
// TypeScript:
// - Adds static typing
// - Catches errors at compile time
// - Supports inference
//
// Best Practice:
// - Explicit return types
// - Avoid any
//
// =======================================================

console.log("=== Core Data Types Notes Loaded ===");
