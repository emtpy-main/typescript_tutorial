//! Basic: class
// class Department {
//     name : string;
//     constructor(n:string){
//         this.name = n;
//     }
//     describe(this:Department){
//         console.log("Deparment ",this.name);
//     } 
// }
// let accountingdept = new Department("accounting");
// accountingdept.describe()
// const accountingcopy = {
//     name : "dummpy",
//     describe : accountingdept.describe
// }
// accountingcopy.describe()
//! access Modifiy
// class Department {
//     // name : string;
//     // private employee : string[];
//     // constructor(n:string){
//     //     this.name = n;
//     //     this.employee = [];
//     // }
//     //============== shortHand to declare attribute
//     constructor(public name : string, private employee:string[]){
//     }
//     describe(this:Department){
//         console.log("Deparment ",this.name);
//     } 
//     addemployee(s:string):void{
//         this.employee.push(s);
//     }
//     displayemployee():void{
//         console.log("No of emplyee: "+this.employee.length);
//         console.log(this.employee);
//     }
// }
// let accountingdept = new Department("accounting",[]);
// // let accountingdept = new Department("accounting");
// accountingdept.describe()
// accountingdept.addemployee("Pratik");
// accountingdept.addemployee("rahul");
// accountingdept.addemployee("ram");
// // accountingdept.employee = ["re"] // this is wrong accessible outside anyonw can directly edit it
// accountingdept.displayemployee();
//! Readonly -> only once we can instilize or assign value in  that varaible
// class Department {
//     name : string;
//     private readonly id : number;
//     constructor(n:string,ID:number){
//         this.name = n;
//         this.id = ID;
//     }
//     describe(this:Department){
//         console.log("Deparment ",this.name);
//     } 
//     // modifyID(n:number){ // can not modify one written
//     //     this.id = n;
//     // }
// }
// let accountingdept = new Department("accounting",920101919);
// accountingdept.describe()
//! Inheritance
//! overriding, protected variable
//! getter and setter
class Department {
    constructor(n, ID) {
        this.name = n;
        this.id = ID;
        this.employee = [];
    }
    describe() {
        console.log("Deparment ", this.name);
    }
    addemployee(s) {
        this.employee.push(s);
    }
}
class AccountingDeptartment extends Department {
    constructor(id, report) {
        super("Accouting", id);
        this.report = report;
    }
    addreport(text) {
        this.report.push(text);
    }
    display() {
        console.log("report: ", this.report);
    }
    addemployee(s) {
        if (s == "patel") {
            return;
        }
        this.employee.push(s);
    }
    get getreports() {
        if (this.report.length > 0) {
            return this.report;
        }
        throw new Error("Reports are empty");
    }
    set setreports(value) {
        if (!value) {
            this.report.push(value);
        }
        return;
    }
}
const account = new AccountingDeptartment(8390293, []);
account.addreport("you are fine and beautiful");
account.display();
console.log(account.getreports);
//! Abstract class
class Deparment2 {
    constructor(s) {
        this.employee = [];
        this.name = s;
    }
    set addemployee(s) {
        this.employee.push(s);
    }
    printemployee() {
        console.log("List of employee", this.employee);
    }
}
class Subclass extends Deparment2 {
    constructor(name) {
        super(name);
    }
    describe() {
        console.log("Deptment name : " + this.name);
    }
}
let obj = new Subclass("account");
obj.addemployee = "pratik";
obj.printemployee();
export {};
//# sourceMappingURL=class.js.map