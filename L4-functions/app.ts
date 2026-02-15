/*********************************************************
 * TypeScript Functions — Complete Notes
 *********************************************************/

console.log("=== TypeScript Functions Notes ===");

/*
Functions in TypeScript support:
- parameter typing
- return typing
- function types
- callbacks
- arrow functions
- optional / default params
- rest params
- overloads
*/

// =======================================================
// 1. Function Return Types
// =======================================================

function add(a: number, b: number): number {
  return a + b;
}

console.log("Add:", add(10, 40));

function greet(name: string): void {
  console.log(`Hi, good morning ${name}`);
}

greet("Pratik");

/*
void → function returns nothing meaningful
*/

// =======================================================
// 2. Variable Holding Function
// =======================================================

let combineFunction: Function;

combineFunction = add;
combineFunction = greet;

// Problem:
// combineFunction(2, 3); ❌ compiler allows but unsafe

/*
Using Function type is BAD practice:
- allows any parameters
- loses type safety
*/

// =======================================================
// 3. Proper Function Types (Best Practice)
// =======================================================

let safeFunction: (a: number, b: number) => number;

safeFunction = add;
// safeFunction = greet; ❌

console.log("Safe Function:", safeFunction(100, 200));

/*
Always define explicit function signatures.
*/

// =======================================================
// 4. Callback Functions
// =======================================================

function addHandle(
  num1: number,
  num2: number,
  cb: (n: number) => void
): void {
  const result = num1 + num2;
  cb(result);
}

addHandle(60, 70, result => console.log("Callback:", result));

/*
Callback signature enforces correct parameter type.
*/

// =======================================================
// 5. Arrow Functions
// =======================================================

const addition = (
  a: number,
  b: number,
  cb: (result: number) => void
): void => {
  const result = a + b;
  cb(result);
};

addition(80, 80, result => console.log("Arrow:", result));

/*
Arrow functions:
- shorter syntax
- lexical this
*/

// =======================================================
// 6. Optional Parameters (?)
// =======================================================

function welcome(name: string, age?: number) {
  console.log(name, age ?? "Not provided");
}

welcome("Pratik");
welcome("Pratik", 21);

// =======================================================
// 7. Default Parameters
// =======================================================

function power(base: number, exp: number = 2) {
  return Math.pow(base, exp);
}

console.log(power(5));
console.log(power(5, 3));

// =======================================================
// 8. Rest Parameters
// =======================================================

function sumAll(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4));

// =======================================================
// 9. Function Overloads
// =======================================================

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any) {
  return a + b;
}

console.log(combine(5, 10));
console.log(combine("Hello ", "World"));

/*
Overloads allow multiple signatures with one implementation.
*/

// =======================================================
// 10. Never Return Type
// =======================================================

function throwError(msg: string): never {
  throw new Error(msg);
}

// throwError("Crash");

/*
never → function never returns
*/

// =======================================================
// 11. Function as Type Alias
// =======================================================

type AddFn = (a: number, b: number) => number;

const add2: AddFn = (a, b) => a + b;

console.log(add2(4, 6));

// =======================================================
// 12. Generic Functions
// =======================================================

function identity<T>(x: T): T {
  return x;
}

console.log(identity<number>(10));
console.log(identity("TS"));

/*
Generics preserve type information.
*/

// =======================================================
// 13. Real Backend Pattern
// =======================================================

type Handler<T> = (data: T) => void;

function process<T>(value: T, handler: Handler<T>) {
  handler(value);
}

process("User created", msg => console.log(msg));

// =======================================================
// 14. Interview Summary
//
// - Always specify return types
// - Avoid Function type
// - Use function signatures
// - Prefer arrow functions
// - Use overloads for polymorphism
// - Callbacks have typed parameters
// - Rest params use arrays
// - never for throwing functions
//
// =======================================================

console.log("=== Function Notes Loaded Successfully ===");
