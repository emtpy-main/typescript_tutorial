/****************************************************
 * TypeScript Generics — Complete Notes (Single File)
 ****************************************************/

/*
Generics allow writing reusable, type-safe code
that works with multiple data types.

Unlike:
- any      → removes type safety
- unknown  → needs checking before use

Generics preserve type information dynamically.
*/

// ================================================
// 1. Generics with Arrays
// ================================================

type Person = {
  name: string;
  age: number;
};

const boy: Person = {
  name: "Mohan",
  age: 17
};

const people: Array<Person> = [
  boy,
  { name: "Ravi", age: 12 }
];

console.log("People:", people);

// ================================================
// 2. Generic Function
// ================================================

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const numVal = getFirst([1, 3, 4]);
const strVal = getFirst(["India", "China"]);

console.log("First number:", numVal);
console.log("First string:", strVal);

// ================================================
// 3. Multiple Generic Types
// ================================================

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = merge({ name: "Monu" }, { skills: ["driving"], age: 20 });
console.log("Merged:", merged);

// ================================================
// 4. Generic Interface
// ================================================

interface Box<T> {
  value: T;
}

const numBox: Box<number> = { value: 30 };
const strBox: Box<string> = { value: "hello" };

console.log("Boxes:", numBox, strBox);

// ================================================
// 5. Generic Class
// ================================================

class storage<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const numStorage = new storage<number>();
numStorage.add(10);
numStorage.add(20);

console.log("Storage:", numStorage.getAll());

// ================================================
// 6. Generic Constraints (extends)
// ================================================

function logLength<T extends { length: number }>(arg: T): T {
  console.log("Length:", arg.length);
  return arg;
}

logLength([1, 2, 4]);
logLength("hello");
// logLength(23); // ❌ number has no length

// ================================================
// 7. Generic Arrow Function
// ================================================

const createObject = <
  T extends string,
  U extends number,
  V extends boolean
>(
  key: T,
  value: U,
  isActive: V
) => {
  return { key, value, isActive };
};

const obj = createObject("ravi", 28, false);
console.log("Created Object:", obj);

// ================================================
// 8. keyof with Generics (Very Important)
// ================================================

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(
  "Property:",
  getProperty({ name: "pratik", age: 21 }, "name")
);

// ================================================
// 9. Default Generic Types
// ================================================

interface ApiResponse<T = string> {
  data: T;
}

const defaultApi: ApiResponse = { data: "default string" };
const numberApi: ApiResponse<number> = { data: 100 };

console.log(defaultApi, numberApi);

// ================================================
// 10. Generic Type Alias
// ================================================

type response<T> = {
  data: T;
  success: boolean;
};

const res: response<Person> = {
  data: boy,
  success: true
};

console.log("Response:", res);

// ================================================
// 11. Generic with Promise (Backend Pattern)
// ================================================

function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}

interface User {
  name: string;
}

// Example usage (commented to avoid runtime fetch):
// fetchData<User>("api/user").then(u => console.log(u));

// ================================================
// 12. Conditional Types
// ================================================

type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// ================================================
// 13. infer Keyword (Extract Return Type)
// ================================================

type ReturnTypeCustom<T> =
  T extends (...args: any[]) => infer R ? R : never;

type TestReturn = ReturnTypeCustom<() => number>; // number

// ================================================
// 14. Built-in Generic Utility Types
// ================================================

type PartialPerson = Partial<Person>;
type RequiredPerson = Required<Person>;
type PickPerson = Pick<Person, "name">;
type OmitPerson = Omit<Person, "age">;
type RecordExample = Record<string, number>;

// ================================================
// 15. Generic vs Union
// ================================================

// Union (fixed types)
function unionFn(x: number | string) {
  return x;
}

// Generic (dynamic reusable)
function genericFn<T>(x: T): T {
  return x;
}

// ================================================
// 16. Real Backend Pattern
// ================================================

interface ApiResult<T> {
  success: boolean;
  data: T;
}

function sendResponse<T>(data: T): ApiResult<T> {
  return { success: true, data };
}

console.log(sendResponse({ id: 1 }));

// ================================================
// 17. Interview Notes (Read Only)
//
// - Generics preserve type information
// - any removes type safety
// - unknown requires checking
// - keyof ensures safe object access
// - extends adds constraints
// - infer extracts types
// - Utility types are generic-based
//
// MERN usage:
// - Axios responses
// - Express Request/Response
// - Mongo models
// - Redux Toolkit
// - React hooks
//
// ================================================

console.log("=== Generics Notes Loaded Successfully ===");
