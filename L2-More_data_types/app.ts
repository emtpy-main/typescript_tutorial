/*********************************************************
 * TypeScript Objects, Arrays, Tuples & Enums — Notes
 *********************************************************/

console.log("=== Objects | Arrays | Tuples | Enums ===");

/*
These are foundational TypeScript concepts.

- Object types
- Array types
- Tuple types
- Enum types
*/

// =======================================================
// 1. Object Types
// =======================================================

const person: {
  firstname: string;
  age: number;
  xyz: {
    address: string;
  };
} = {
  firstname: "Pratik",
  age: 1000,
  xyz: {
    address: "Mohan Road, Delhi"
  }
};

console.log("Person:", person);

/*
In JavaScript:
Accessing non-existing property → undefined

In TypeScript:
Accessing unknown property → Compile-time error
*/

// =======================================================
// 2. Array Types
// =======================================================

// Basic array
const languages: string[] = ["French", "African"];

console.log("Languages:", languages);

// Generic array syntax
const numbers: Array<number> = [1, 2, 3];

// Array of objects
type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Pratik", age: 20 },
  { name: "Ravi", age: 25 }
];

console.log("Users:", users);

/*
Array type syntaxes:
string[]
Array<string>
*/

// =======================================================
// 3. any[] (Avoid if Possible)
// =======================================================

const arr: any[] = ["string", 23, person];

console.log("Any Array:", arr);

/*
any[] disables type safety.
Prefer union types instead.
*/

// =======================================================
// 4. Tuple Types
// =======================================================

/*
Tuple = Fixed-length array
Fixed types at fixed positions
*/

const person1: {
  name: string;
  age: number;
  skills: string[];
  product: [number, string];
} = {
  name: "Pratik",
  age: 20,
  skills: ["batting", "bowling"],
  product: [20, "Macbook Air"]
};

console.log("Tuple Product:", person1.product);

// person1.product[1] = 30; ❌ error (must be string)
// person1.product = [20, "Macbook", "Extra"]; ❌

/*
Tuples enforce:
- Order
- Length
- Type at index
*/

// =======================================================
// 5. Tuple with Named Elements (TS 4+)
// =======================================================

type Product = [id: number, name: string];

const product1: Product = [101, "Laptop"];

console.log("Named Tuple:", product1);

// =======================================================
// 6. Enums
// =======================================================

/*
Enum = Named constants
Used for role/status types
*/

enum Role {
  Admin,
  User,
  ReadOnlyUser
}

const person3: {
  skills: string[];
  product: [number, string];
  role: Role;
} = {
  skills: ["batting", "bowling"],
  product: [20, "Macbook"],
  role: Role.Admin
};

if (person3.role === Role.Admin) {
  console.log("Admin");
} else if (person3.role === Role.User) {
  console.log("User");
} else {
  console.log("Read Only User");
}

/*
Enum values:
Admin = 0
User = 1
ReadOnlyUser = 2
*/

// =======================================================
// 7. Custom Enum Values
// =======================================================

enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED"
}

const currentStatus: Status = Status.Success;

console.log("Status:", currentStatus);

/*
String enums are preferred in backend APIs.
*/

// =======================================================
// 8. Enum vs Union Literal
// =======================================================

type RoleType = "Admin" | "User" | "ReadOnlyUser";

let roleValue: RoleType = "Admin";

/*
Modern TS preference:
Use Union Literal instead of enum
Unless numeric mapping needed.
*/

// =======================================================
// 9. Interview Summary
//
// Object:
// - Define shape of data
//
// Array:
// - string[]
// - Array<T>
//
// Tuple:
// - Fixed size + fixed order
//
// Enum:
// - Named constants
// - Numeric or String
//
// Prefer:
// - Literal unions over enums (modern TS)
// - Avoid any[]
//
// =======================================================

console.log("=== Objects / Arrays / Tuples / Enums Notes Loaded ===");
