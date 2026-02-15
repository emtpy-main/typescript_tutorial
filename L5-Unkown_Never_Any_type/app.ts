/*********************************************************
 * TypeScript unknown & never — Complete Notes
 *********************************************************/

console.log("=== unknown & never Notes ===");

/*
unknown and never are advanced TypeScript types.

unknown → safe alternative to any
never   → value that never occurs
*/

// =======================================================
// 1. unknown Type
// =======================================================

let userInput: unknown;
let userName: string;

userInput = 10;
userInput = "shiva";

// ❌ Cannot directly assign unknown
// userName = userInput;

// ✅ Must narrow type first
if (typeof userInput === "string") {
  userName = userInput;
}

console.log("Username:", userName);

/*
unknown forces type checking before usage.
This makes it safer than any.
*/

// =======================================================
// 2. unknown vs any
// =======================================================

let valAny: any;
let valUnknown: unknown;

valAny = 5;
valUnknown = 5;

// any allows everything (dangerous)
let s1: string = valAny;

// unknown blocks assignment until checked
// let s2: string = valUnknown; ❌

// safe narrowing
if (typeof valUnknown === "number") {
  console.log(valUnknown + 10);
}

/*
any:
- disables TypeScript

unknown:
- enforces checks
*/

// =======================================================
// 3. never Type
// =======================================================

/*
never represents:
- functions that never return
- infinite loops
- thrown errors
*/

function generateError(message: string, statusCode: number): never {
  throw { message, statusCode };
}

// generateError("Internal Server Error", 500);

// =======================================================
// 4. never in Exhaustive Checking
// =======================================================

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;

    case "square":
      return shape.side * shape.side;

    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

/*
If new shape added, compiler errors here.
Very powerful pattern.
*/

// =======================================================
// 5. never vs void
// =======================================================

function logMsg(): void {
  console.log("hello");
}

function crash(): never {
  throw new Error("Crash!");
}

/*
void  → may return undefined
never → returns NOTHING EVER
*/

// =======================================================
// 6. Real Backend Example
// =======================================================

function fail(msg: string): never {
  throw new Error(msg);
}

function validateUser(user?: string) {
  if (!user) fail("User not found");
  return user;
}

/*
never useful for error handling pipelines.
*/

// =======================================================
// 7. Interview Summary
//
// unknown:
// - safer than any
// - forces narrowing
//
// any:
// - disables compiler
//
// never:
// - function never returns
// - error throw
// - exhaustive checks
//
// Prefer unknown over any.
// Use never for unreachable code.
//
// =======================================================

console.log("=== unknown & never Notes Loaded ===");
