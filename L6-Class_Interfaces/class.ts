/*********************************************************
 * TypeScript Classes — Complete Notes
 *********************************************************/

console.log("=== TypeScript Classes Notes ===");

/*
Classes in TS support:
- OOP concepts
- Access modifiers
- Inheritance
- Abstract classes
- Getters / Setters
- Encapsulation
*/

// =======================================================
// 1. Basic Class
// =======================================================

class DepartmentBasic {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: DepartmentBasic) {
    console.log("Department:", this.name);
  }
}

const dept = new DepartmentBasic("Accounting");
dept.describe();

/*
this: DepartmentBasic ensures method is only called
on correct object.
*/

// =======================================================
// 2. Access Modifiers + Constructor Shorthand
// =======================================================

class Department {
  constructor(
    public name: string,
    private employees: string[] = []
  ) {}

  addEmployee(emp: string) {
    this.employees.push(emp);
  }

  printEmployees() {
    console.log("Employees:", this.employees);
  }
}

const d1 = new Department("HR");
d1.addEmployee("Pratik");
d1.addEmployee("Rahul");
d1.printEmployees();

/*
public     → accessible everywhere
private    → only inside class
protected  → class + subclasses
*/

// =======================================================
// 3. readonly Properties
// =======================================================

class DepartmentReadonly {
  constructor(
    public name: string,
    private readonly id: number
  ) {}

  describe() {
    console.log(this.name, this.id);
  }
}

const dr = new DepartmentReadonly("IT", 101);
dr.describe();
// dr.id = 2 ❌ cannot modify

// =======================================================
// 4. Inheritance + protected
// =======================================================

class BaseDepartment {
  protected employees: string[] = [];

  constructor(
    protected name: string,
    private readonly id: number
  ) {}

  describe() {
    console.log("Department:", this.name);
  }

  addEmployee(emp: string) {
    this.employees.push(emp);
  }
}

class AccountingDepartment extends BaseDepartment {
  private reports: string[] = [];

  constructor(id: number) {
    super("Accounting", id);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  // Method override
  addEmployee(emp: string): void {
    if (emp === "patel") return;
    this.employees.push(emp);
  }

  get getReports() {
    if (this.reports.length === 0) {
      throw new Error("No reports");
    }
    return this.reports;
  }

  set setReports(value: string) {
    if (!value) return;
    this.reports.push(value);
  }
}

const acc = new AccountingDepartment(1001);
acc.addEmployee("Pratik");
acc.addReport("Quarterly report");
console.log(acc.getReports);

/*
protected allows child class access.
private does not.
*/

// =======================================================
// 5. Getters & Setters
// =======================================================

/*
getter → access like property
setter → assign like property
*/

acc.setReports = "Annual report";
console.log(acc.getReports);

// =======================================================
// 6. Abstract Classes
// =======================================================

abstract class DepartmentAbstract {
  employee: string[] = [];

  constructor(public name: string) {}

  set addEmployee(emp: string) {
    this.employee.push(emp);
  }

  printEmployee() {
    console.log("Employees:", this.employee);
  }

  abstract describe(): void;
}

class SubDepartment extends DepartmentAbstract {
  describe(): void {
    console.log("Department name:", this.name);
  }
}

const sd = new SubDepartment("Accounts");
sd.addEmployee = "Pratik";
sd.printEmployee();
sd.describe();

/*
Abstract class:
- Cannot be instantiated
- Can contain implementation
- Forces subclasses to implement abstract methods
*/

// =======================================================
// 7. Interface vs Abstract Class
// =======================================================

/*
Interface:
- Only structure
- No implementation
- Multiple inheritance supported

Abstract Class:
- Can contain logic
- Single inheritance
- Constructor allowed
*/

// =======================================================
// 8. Real World Example
// =======================================================

abstract class Service {
  abstract execute(): void;
}

class EmailService extends Service {
  execute() {
    console.log("Sending email...");
  }
}

const service = new EmailService();
service.execute();

// =======================================================
// 9. Interview Summary
//
// - Classes support OOP
// - public/private/protected control access
// - readonly prevents reassignment
// - protected accessible in subclasses
// - abstract enforces implementation
// - getter/setter behave like properties
// - constructor shorthand saves code
//
// =======================================================

console.log("=== Class Notes Loaded Successfully ===");
